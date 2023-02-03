/**
 * Created by ceo on 2019-07-25.
 */

var BmSelectBoxOption = function(){
    this.label;
    this.value;
    this.dom;
};

var BMSelectBox = function( target ){

    this.container = $(target).parent();
    this.target = target;

    // this.attrClass = $(this.target).attr("class");
    //this.selectWrap = $('<div class="selected_item_con wv_selected_item_con"></div>');
    //this.selectCon = $('<div class="wv_select_style_con"><ul class="wv_select"></ul></div>');
    this.class = $(this.target).attr("class") ? $(this.target).attr("class") : "select_style_0";
    this.template = '<div class="selected_item_con bm_select_box">\n' +
        '    <div class="selected_item">{{SELECTED_OPTION_LABEL}}</div>\n' +
        '    <div class="'+this.class+'_con">\n' +
        '        <ul class="'+this.class+'"></ul>\n' +
        '    </div>\n' +
        '</div>';
    this.optionTemplate = '<li data-value="{{VALUE}}"><a href="javascript:void(0)">{{LABEL}}</a></li>';

    this.dom;
    this.id = $(target).attr("id");

    this.selectedValue = "";
    this.selectedIndex = 0;
    this.optionList = [];
    this.isActive = false;

    this.onChangeComplete = null;

    this.init();
    this.registEvent();


    if( !bm.selectBoxList ) bm.selectBoxList = [];
    bm.selectBoxList.push( this );

};

BMSelectBox.prototype = {

    init : function(){
        var _this = this;
        // 1. select box 셋팅
        var selectedOptionLabel = $(this.target).find("option:selected").text();
        var selectDomString = bm.dom.convertVariables( {SELECTED_OPTION_LABEL : selectedOptionLabel }, this.template );
        this.dom = $( selectDomString ).appendTo( this.container );

        // 2. 기존 selectbox display none 처리
        $(this.target).hide();

        // 3. option 셋팅
        this.renderOption();
    }

    ,registEvent : function(){
        var _this = this;
        $(this.container).on("change", "#"+this.id, function( e ){
            _this.val( $(this).val() );
        });

        // 셀렉트 박스 클릭할 경우
        $(this.container).on("click", ".selected_item_con", function(e){
            e.stopImmediatePropagation();

            var len = bm.selectBoxList.length;
            while( len-- ){
                if( bm.selectBoxList[len] !== _this && bm.selectBoxList[len].isActive ){
                    bm.selectBoxList[len].close();
                }
            }

            if( _this.isActive ){
                _this.close();
            }else{
                _this.open();
            }
        });


        // 옵션을 클릭할 경우
        $(this.container).on("click", "li", function(e){
            e.stopImmediatePropagation();

            var idx = $(_this.dom).find("li").index(this);
            _this.setSelectedIndex( idx );

            if( _this.onChangeComplete && _this.onChangeComplete != null ) _this.onChangeComplete.call( _this );

            _this.close();
        });
    }

    ,open : function(){
        if( this.isActive ) return;
        this.isActive = true;

        $(this.dom).find('.selected_item').addClass('active');
        $(this.dom).find('.'+this.class+'_con').show();

        $(window).on("click", {object : this}, this.forcedClose );
    }

    ,forcedClose : function (e){
        e.data.object.close();
    }

    ,close : function(){
        if( this.isActive == false ) return;
        this.isActive = false;

        $(window).off("click", this.forcedClose );

        $(this.dom).find('.selected_item').removeClass('active');
        $(this.dom).find('.'+this.class+'_con').hide();
    }

    /**
     * jquery 와 api 맞추기 위한 함수. value parameter 가 없으면 현재 value 를 반환함.
     * @param value
     * @returns {string|*}
     */
    ,val : function( value ){
        if( value === undefined ){
            return this.selectedValue;
        }else{
            this.setSelectedIndexAtValue( value );
        }
    }

    ,setLabel : function( label ){
        $(this.dom).find(".selected_item").text( label );
    }

    /**
     * value 로 선택된 값 변경하기
     * @param value
     */
    ,setSelectedIndexAtValue : function( value ){
        this.selectedValue = value;

        var len = this.optionList.length;
        for( var i=0; i<len; i++ ){
            if( this.optionList[i].value == value ){
                this.selectedIndex = i;
                this.setLabel( this.optionList[i].label );
                break;
            }
        }

        $(this.target).val( this.selectedValue );
    }

    /**
     * index 로 선택된 값 변경하기
     * @param index
     */
    ,setSelectedIndex : function( index ){
        this.selectedIndex = index;
        this.selectedValue = this.optionList[index].value;
        this.setLabel( this.optionList[index].label );

        // [chojw] selectbox에 값 세팅하고, change 이벤트 트리거
        $(this.target).val( this.selectedValue ).trigger("change");
    }

    ,getSelectedIndex : function(){
        return this.selectedIndex;
    }

    ,getSelectedValue : function(){
        return this.selectedValue;
    }

    ,renderOption : function(){

        var optionContainer = $(this.dom).find("ul");
        var _this = this;
        var optionDomString;
        var bmOption;


        // 기존에 등록된 옵션 제거
        if( this.optionList && this.optionList.length > 0 ){
            var len = this.optionList.length;
            for( var i=0; i<len; i++ ){
                $(this.optionList[i].dom).remove();
            }
            this.optionList.length = 0;
        }


        // 신규 옵션 등록
        $(this.target).find("option").each( function(){
        	if($(this).attr("value")=='_not_view_'){
        		return;
        	}
            bmOption = new BmSelectBoxOption();
            bmOption.label = $(this).text();
            bmOption.value = $(this).attr("value");

            optionDomString = bm.dom.convertVariables( {LABEL : bmOption.label, VALUE : bmOption.value }, _this.optionTemplate );
            bmOption.dom = $( optionDomString ).appendTo(optionContainer);
            _this.optionList.push( bmOption );
        })
    }

};