var previewChannelList = [];
var advanceCustomCSS = "";
var chtIframeData = "";
jQuery(document).ready(function(){

    var iframeData = jQuery("#wp-cta_body_text-wrap").find("iframe");
    chtIframeData = iframeData.contents().find("body").html();

    setInterval(function(){
        if(jQuery("#cta-option-chat-view").is(":checked") && jQuery("#wp-cta_body_text-wrap").length) {
            var iframeData = jQuery("#wp-cta_body_text-wrap").find("iframe");
            bodyMsg = iframeData.contents().find("body").html();
            if (bodyMsg != chtIframeData) {
                chtIframeData = bodyMsg;
                change_custom_preview();
            }
        }
    }, 2000);

    jQuery(document).on("click", "#save-button", function(){
        jQuery("#button_type").val(1);
    });

    jQuery(document).on("click", "#save-dashboard-button", function(){
        jQuery("#button_type").val(2);
    });

    jQuery(document).on("click", ".custom-channel-button a.custom-channel-link", function(e){
        e.preventDefault();
        jQuery(".main .channels-icons > .icon.custom-link:not(.active):first").trigger("click");
        if(jQuery(".main .channels-icons > .icon.custom-link").length == jQuery(".main .channels-icons > .icon.custom-link.active").length) {
            jQuery(".custom-channel-button").hide();
        }
    });

    jQuery(document).on("mouseover", ".csaas.open-on-hover .csaas-i-trigger:not(.single-channel)", function () {
        if(!jQuery(this).closest(".csaas-widget").hasClass("csaas-open") && !jQuery(this).closest(".csaas-widget").hasClass("on-csaas-widget")) {
            jQuery(this).closest(".csaas-widget").addClass("on-csaas-widget");
            jQuery(this).find(".csaas-cta-main").trigger("click");
        }
    }).on("mouseleave", ".csaas.open-on-hover .csaas-i-trigger:not(.single-channel)", function () {
        if(!jQuery(this).closest(".csaas-widget").hasClass("csaas-open") ) {
            jQuery(this).closest(".csaas-widget").removeClass("on-csaas-widget")
        }
    });

    jQuery(document).on("click", ".csaas-close-view-list", function(){
        jQuery(this).closest(".csaas").find(".csaas-widget").removeClass("csaas-open");
    });

    jQuery(document).on("click", ".csaas-i-trigger:not(.single-channel)", function(){
        jQuery(this).closest(".csass").removeClass("form-open");
        jQuery(this).closest(".csaas-widget:not(.has-single)").toggleClass("csaas-open");
        jQuery(".csaas-outer-forms").removeClass("active");
        jQuery(".form-open").removeClass("form-open");
        jQuery(".chaty-preview").height(234);
    });

    jQuery(document).on("click", "#whatsapp_embedded_window_Whatsapp", function(){
        change_custom_preview();
    });

    jQuery(document).on("click", "#cht_active", function(){
        if(jQuery(this).is(":checked")) {
            jQuery("#chaty-turned-on").addClass("active");
            jQuery("#chaty-turned-off").removeClass("active");
        } else {
            jQuery("#chaty-turned-off").addClass("active");
            jQuery("#chaty-turned-on").removeClass("active");
        }
    });

    jQuery(document).on("click", "a.csaas-whatsapp-form", function(e){
        e.preventDefault();
        // e.stopPropagation();
        var dataForm = jQuery(this).data('form');
        if(!isEmpty(dataForm)) {
            if(jQuery("#"+dataForm).length) {
                if(jQuery(this).closest(".csaas").hasClass("form-open")) {
                    jQuery("#" + dataForm).removeClass("is-active");

                    jQuery(this).closest(".csaas-widget:not(.has-single)").addClass("csaas-open");
                    jQuery(this).closest(".csaas").removeClass("form-open");
                    jQuery("#" + dataForm).removeClass("active");
                } else {

                    var widgetSize = parseInt(jQuery("#custom-widget-size-input").val() * 2 / 3);
                    var totalSize = parseInt(jQuery("#" + dataForm).height() / 2) + widgetSize + 20;
                    if (totalSize > 234) {
                        jQuery(".chaty-preview").height(totalSize + 10);
                    }

                    var buttonHtml = jQuery(this).closest(".csaas-widget").find(".csaas-cta-close").find("button").html();
                    jQuery("#" + dataForm).addClass("is-active");

                    jQuery(this).closest(".csaas-widget").removeClass("csaas-open");
                    jQuery(this).closest(".csaas").addClass("form-open");
                    jQuery("#" + dataForm).addClass("active");

                    jQuery(this).closest(".csaas-widget").find(".open-csaas-channel").html(buttonHtml);
                }
            }
        }
    });

    jQuery(document).on("keyup", ".whatsapp-placeholder", function(){
        jQuery("#csaas_whatsapp_input").attr("placeholder", jQuery(this).val());
    });

    jQuery(document).on("change", ".whatsapp-placeholder", function(){
        jQuery("#csaas_whatsapp_input").attr("placeholder", jQuery(this).val());
    });

    jQuery(document).on("click", ".whatsapp-emoji", function(){
        if(jQuery(this).is(":checked")) {
            jQuery(".csaas-whatsapp-field").addClass("has-emoji");
        } else {
            jQuery(".csaas-whatsapp-field").removeClass("has-emoji");
        }
    });

    jQuery(document).on("click", ".csaas-close-button, .csaas-close-agent-list, .whatsapp-form-close-btn", function(e) {
        e.preventDefault();
        e.stopPropagation();
        jQuery(".csaas-outer-forms").removeClass("active");
        jQuery("#csaas-widget-0").removeClass("form-open");
        if(jQuery("#csaas-widget-0").find(".csaas-widget").hasClass("csaas-no-close-button")) {
            jQuery("#csaas-widget-0").find(".csaas-widget:not(.has-single)").addClass("csaas-open");
        }
        jQuery(".chaty-preview").height(234);
    });

    jQuery(document).on("click", "a.csaas-qr-code-form", function(e){
        e.preventDefault();
        var dataForm = jQuery(this).data('form');
        if(!isEmpty(dataForm)) {
            if(jQuery("#"+dataForm).length) {

                var widgetSize = parseInt(jQuery("#custom-widget-size-input").val() * 2 / 3);
                var totalSize = parseInt(jQuery("#"+dataForm).height()/2) + widgetSize + 20;
                if(totalSize > 234) {
                    jQuery(".chaty-preview").height(totalSize+10);
                }

                var buttonHtml = jQuery(this).closest(".csaas-widget").find(".csaas-cta-close").find("button").html();

                jQuery(this).closest(".csaas-widget").removeClass("csaas-open");
                jQuery(this).closest(".csaas").addClass("form-open");
                jQuery("#"+dataForm).addClass("active");

                jQuery(this).closest(".csaas-widget").find(".open-csaas-channel").html(buttonHtml);
            }
        }
    });

    jQuery(document).on("click", "a.csaas-contact-us-form", function(e){
        e.preventDefault();
        // e.stopPropagation();
        var dataForm = jQuery(this).data('form');
        if(!isEmpty(dataForm)) {
            if(jQuery("#"+dataForm).length) {
                var widgetSize = parseInt(jQuery("#custom-widget-size-input").val() * 2 / 3);
                var totalSize = parseInt(jQuery("#"+dataForm).height()/2) + widgetSize + 20;

                if(totalSize > 234) {
                    jQuery(".chaty-preview").height(totalSize+10);
                    jQuery(".preview .page").height(totalSize+26);
                }

                var buttonHtml = jQuery(this).closest(".csaas-widget").find(".csaas-cta-close").find("button").html();

                jQuery(this).closest(".csaas-widget").removeClass("csaas-open");
                jQuery(this).closest(".csaas").addClass("form-open");
                jQuery("#"+dataForm).addClass("active");
                jQuery("#"+dataForm).find(".csaas-ajax-success-message").remove();
                jQuery("#"+dataForm).find(".csaas-ajax-error-message").remove();
                jQuery("#"+dataForm).find(".has-csaas-error").removeClass("has-csaas-error");

                jQuery(this).closest(".csaas-widget").find(".open-csaas-channel").html(buttonHtml);
            }
        }
    });

    jQuery(document).on("click", ".csaas-widget.has-single .csaas-i-trigger.single-channel .csaas-cta-close .csaas-cta-button", function(){
        jQuery(this).closest(".csaas").removeClass("form-open");
        jQuery(".csaas-outer-forms").removeClass("active");
    });

    jQuery(document).on("keyup", "#cht_social_message_Contact_Us_form_title", function(){
        jQuery(".csaas-contact-form-title").text(jQuery(this).val().toHtmlEntities());
    });

    jQuery(document).on("keyup", "#button_text_for_Contact_Us", function(){
        jQuery("#csaas-submit-button-0").text(jQuery(this).val().toHtmlEntities());
    });

    jQuery(document).on("keyup", "#cta_heading_text", function(){
        jQuery(".csaas-view-header").text(jQuery(this).val().toHtmlEntities());
    });

    jQuery(document).on("keyup", "#cta_body_text", function(){
        jQuery(".csaas-top-content").text(jQuery(this).val().toHtmlEntities());
    });

    jQuery(document).on("change", ".form-field-setting-col input[type='text'], .chaty-input-text", function(){
        change_custom_preview();
    });

    jQuery(document).on("click", ".form-field-setting-col input[type='checkbox']", function(){
        change_custom_preview();
    });

    jQuery(document).on("change", ".chaty-agent-name, #chaty_default_state, input[name='chaty_icons_view']:checked", function(){
        change_custom_preview();
    });

    jQuery(document).on("keyup", "input[name='cht_close_button_text']", function(){
        change_custom_preview();
    });

    jQuery(document).on("change", "input[name='cht_close_button_text']", function(){
        change_custom_preview();
    });

    jQuery(document).on("click", ".chaty-preview input, .chaty-preview button", function(e){
        e.preventDefault();
    });

    jQuery(document).on("click", ".csaas-channel.csaas-agent-button", function(e){
        e.preventDefault();
        // e.stopPropagation();
        var dataForm = jQuery(this).data('form');
        if(!isEmpty(dataForm)) {
            if(jQuery("#"+dataForm).length) {
                if(jQuery(this).closest(".csaas").hasClass("form-open")) {
                    jQuery(this).closest(".csaas-widget:not(.has-single)").addClass("csaas-open");
                    jQuery(this).closest(".csaas").removeClass("form-open");
                    jQuery("#" + dataForm).removeClass("active");
                } else {
                    var widgetSize = parseInt(jQuery("#custom-widget-size-input").val() * 2 / 3);
                    var totalSize = parseInt(jQuery("#" + dataForm).height() / 2) + widgetSize + 20;
                    if (totalSize > 234) {
                        jQuery(".chaty-preview").height(totalSize + 10);
                        jQuery(".preview .page").height(totalSize + 26);
                    }

                    var buttonHtml = jQuery(this).closest(".csaas-widget").find(".csaas-cta-close").find("button").html();
                    jQuery("#" + dataForm).addClass("is-active");

                    jQuery(this).closest(".csaas-widget").removeClass("csaas-open");
                    jQuery(this).closest(".csaas").addClass("form-open");
                    jQuery("#" + dataForm).addClass("active");

                    jQuery(this).closest(".csaas-widget").find(".open-csaas-channel").html(buttonHtml);
                }
            }
        }
    });

    jQuery(document).on("click", "#trigger_on_time, #chaty_trigger_on_scroll, #cht_close_button", function(){
        change_custom_preview();
    });

    jQuery(".chaty-color-field.chaty-bg-color").trigger("change");

    change_custom_preview();

});

jQuery(window).on("load", function(){
    jQuery(".chaty-color-field.chaty-bg-color").trigger("change");
});


function change_custom_preview() {
    var socialString = [];
    jQuery("#channels-selected-list > li.chaty-channel").each(function () {
        socialString.push(jQuery(this).attr("data-id"));
    });
    socialString = socialString.join(",");
    jQuery("#cht_numb_slug").val(socialString);

    if(jQuery(".main .channels-icons > .icon.custom-link").length != jQuery(".main .channels-icons > .icon.custom-link.active").length) {
        jQuery(".custom-channel-button").show();
    }

    if(!jQuery("#trigger_on_time").is(":checked")){
        jQuery("#chaty_trigger_time").prop("disabled", true);
    } else {
        jQuery("#chaty_trigger_time").prop("disabled", false);
    }

    if(!jQuery("#chaty_trigger_on_scroll").is(":checked")){
        jQuery("#chaty_trigger_on_page_scroll").prop("disabled", true);
    } else {
        jQuery("#chaty_trigger_on_page_scroll").prop("disabled", false);
    }

    if(jQuery("#chaty_default_state").val() == "open" && jQuery("#channel-list > .icon.active").length > 1) {
        jQuery("#chaty_attention_effect").val("");
        jQuery("#chaty_attention_effect, .test_textarea").attr("disabled", true);
        jQuery("#chaty_attention_effect option:first-child").text("Doesn't apply for the open state");
        if(jQuery(".test_textarea").val() != "Doesn't apply for the open state") {
            jQuery(".test_textarea").attr("data-value", jQuery(".test_textarea").val().toHtmlEntities());
        }
        jQuery(".test_textarea").val("Doesn't apply for the open state");
        jQuery("#cht_number_of_messages").attr("disabled", true);
        jQuery("#cht_pending_messages").attr("disabled", true);
        jQuery(".disable-message").addClass("label-tooltip").addClass("icon");
        jQuery("#cht_pending_messages").attr("checked", false);
        jQuery(".pending-message-items").removeClass("active");
        jQuery("#cta-action input").attr("disabled", true);
    } else {
        jQuery("#chaty_attention_effect, .test_textarea").attr("disabled", false);
        jQuery("#chaty_attention_effect option:first-child").text("None");
        jQuery(".test_textarea").attr("placeholder","");
        if(jQuery(".test_textarea").val() == "Doesn't apply for the open state") {
            jQuery(".test_textarea").val(jQuery(".test_textarea").attr("data-value"));
        }
        jQuery("#cht_number_of_messages").attr("disabled", false);
        jQuery("#cht_pending_messages").attr("disabled", false);
        jQuery(".disable-message").removeClass("label-tooltip").removeClass("icon");
        jQuery("#cta-action input").attr("disabled", false);
    }


    if(jQuery(".chaty-bg-color").length) {
        jQuery(".chaty-bg-color").each(function () {
            if(jQuery(this).closest(".chaty-channel").data("channel") == "Instagram") {
                if(jQuery(this).val() != "#ffffff") {
                    jQuery(this).closest("li.chaty-channel").find(".chaty-main-svg").find(".color-element").attr("fill", jQuery(this).val());
                }
            } else {
                jQuery(this).closest("li.chaty-channel").find(".chaty-main-svg").find(".color-element").attr("fill", jQuery(this).val());
            }
        });
    }
    if(jQuery(".agent-icon-color").length) {
        jQuery(".agent-icon-color").each(function () {
            if(jQuery(this).closest(".chaty-channel").data("channel") == "Instagram") {
                if(jQuery(this).val() != "#ffffff") {
                    jQuery(this).closest("li.chaty-channel").find(".chaty-main-svg").find(".color-element").attr("fill", jQuery(this).val());
                }
            } else {
                jQuery(this).closest("li.chaty-channel").find(".chaty-main-svg").find(".color-element").attr("fill", jQuery(this).val());
            }
        });
    }
    jQuery(".chaty-preview").height(234);
    jQuery(".chaty-preview").html("");
    previewChannelList = [];
    var isDesktop = jQuery("#previewDesktop").is(":checked")?true:false;
    if(!isDesktop) {
        jQuery("#admin-preview .page").addClass("mobile");
    } else {
        jQuery("#admin-preview .page").removeClass("mobile");
    }
    if(jQuery("#channels-selected-list > li:not(.chaty-cls-setting)").length >= 2) {
        jQuery("#chaty-social-close").show();
    } else {
        jQuery("#chaty-social-close").hide();
    }
    jQuery(".csaas-outer-forms").remove();
    if(jQuery("#chaty_default_state").val() == "open") {
        jQuery(".hide-show-button").addClass("active");
    } else {
        jQuery(".hide-show-button").removeClass("active");
    }
    if(jQuery("#channel-list .icon.active").length == 0) {
        jQuery(".channel-empty-state").addClass("active");
    } else {
        jQuery(".channel-empty-state").removeClass("active");
    }
    if(jQuery("#channels-selected-list > li").length > 0) {
        advanceCustomCSS = "";
        var activeChannels = getActiveChannels();
        if(activeChannels) {

            if(activeChannels <= 1 && jQuery("input[name='cta_type']:checked").val() != "chat-view") {
                jQuery('.chaty-widget-color').addClass('hidden');
            } else {
                jQuery('.chaty-widget-color').removeClass('hidden');
            }

            if(jQuery("#whatsapp_embedded_window_Whatsapp").length && jQuery("#whatsapp_embedded_window_Whatsapp").is(":checked")) {
                jQuery('.chaty-widget-color').removeClass('hidden');
            }

            if(jQuery("#upload_qr_code_val-WeChat").length && jQuery("#upload_qr_code_val-WeChat").val() != "") {
                jQuery('.chaty-widget-color').removeClass('hidden');
            }

            if(jQuery("#chaty-social-Contact_Us").length) {
                jQuery('.chaty-widget-color').removeClass('hidden');
            }

            var widgetPosition = getWidgetPosition();
            widgetPosition = (widgetPosition == "right") ? "right" : "left";
            var toolTipPosition = getToolTipPosition();

            if(jQuery("input[name='cta_type']:checked").val() == "chat-view") {
                var widgetHtml = "<div style='display: none' class='csaas csaas-has-chat-view csaas-id-0 csaas-widget-0 csaas-key-0' id='csaas-widget-0' data-key='0' data-id='0' data-identifier='0' data-nonce='0' >" +
                    "<div class='csaas-widget " + widgetPosition + "-position'>" +
                    "<div class='csaas-channels'>" +
                    "<div class='csaas-i-trigger'></div>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                jQuery(".chaty-preview").append(widgetHtml);

                makeChatyChatView();
            } else {
                var widgetHtml = "<div style='display:none' class='csaas csaas-id-0 csaas-widget-0 csaas-key-0' id='csaas-widget-0' data-key='0' data-id='0' data-identifier='0' data-nonce='0' >" +
                    "<div class='csaas-widget " + widgetPosition + "-position'>" +
                    "<div class='csaas-channels'>" +
                    "<div class='csaas-channel-list'></div>" +
                    "<div class='csaas-i-trigger'></div>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                jQuery(".chaty-preview").append(widgetHtml);
            }

            if(previewChannelList.length == 1 && jQuery("input[name='cta_type']:checked").val() != "chat-view") {
                var channelHtml = getChannelSetting(previewChannelList[0], 0, toolTipPosition);

                jQuery("#csaas-widget-0 .csaas-i-trigger").html(channelHtml);
                jQuery("#csaas-widget-0 .csaas-i-trigger").addClass("single-channel");
                jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel").addClass("single");

                jQuery("#csaas-widget-0 .csaas-widget").addClass("has-single");
                var ctaText = jQuery(".test_textarea").val();
                if(!isEmpty(ctaText)) {
                    ctaText = htmlDecode(ctaText);
                }
                if(!isEmpty(ctaText)) {
                    jQuery("#csaas-widget-0 .csaas-tooltip").removeClass("csaas-tooltip");
                    jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel").attr("data-hover", ctaText.toHtmlEntities());
                    jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel").addClass("active").addClass("csaas-tooltip").addClass(toolTipPosition);
                    jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel").addClass("active").addClass("csaas-tooltip").addClass("pos-"+toolTipPosition);

                    jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel").append("<span class='on-hover-text'>"+ctaText.toHtmlEntities()+"</span>").addClass("active").addClass("has-on-hover");
                    jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel a").append("<span class='on-hover-text'>"+ctaText.toHtmlEntities()+"</span>").addClass("has-on-hover");
                }

                var closeHtml = '<div class="csaas-channel csaas-cta-close csaas-tooltip pos-' + toolTipPosition + '">' +
                    '<div class="csaas-cta-button"><button type="button">' +
                    '<span class="csaas-svg">' +
                    '<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="26" cy="26" rx="26" ry="26" fill="'+ jQuery("input[name='cht_color']:checked").val().toHtmlEntities() +'"></ellipse><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="#fff"></rect><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="#fff"></rect></svg>' +
                    '</span>' +
                    '<span class="sr-only">Hide csaas</span>' +
                    '</button>' +
                    '</div>' +
                    '</div>';
                jQuery("#csaas-widget-0 .csaas-i-trigger").append(closeHtml);
            } else {
                for(i=0; i<previewChannelList.length; i++) {
                    var channel = previewChannelList[i];
                    // var channelHtml = getChannelSetting(channel, 0, toolTipPosition);
                    // jQuery("#csaas-widget-0 .csaas-channel-list").append(channelHtml);

                    if(jQuery("input[name='cta_type']:checked").val() == "chat-view") {
                        var channelHtml = getChannelSetting(channel, 0, "top");
                        jQuery(".csaas-chat-view-0 .csaas-view-channels").append(channelHtml);
                    } else {
                        var channelHtml = getChannelSetting(channel, 0, toolTipPosition);
                        jQuery("#csaas-widget-0 .csaas-channel-list").append(channelHtml);
                    }

                    // if(channel != "Instagram" || (channel.icon_color != "#ffffff" && channel.icon_color != "#fff")) {
                    //     customCSS += "#csaas-widget-0 ."+channel+"-channel .color-element{ fill: "+channel.icon_color+"; color: "+channel.icon_color+";}";
                    //     customCSS += "#csaas-widget-0 .channel-icon-"+channel+" .color-element{ fill: "+channel.icon_color+"; color: "+channel.icon_color+";}";
                    // }
                    //
                    // customCSS += "#csaas-widget-0 ."+channel+"-channel .csaas-custom-icon { background-color: "+channel.icon_color+"; }";
                    // customCSS += "#csaas-widget-0 ."+channel+"-channel .csaas-svg { background-color: "+channel.icon_color+";}";
                    // customCSS += "#csaas-widget-0 .channel-icon-"+channel+" .csaas-svg { background-color: "+channel.icon_color+";}";
                }

                var widgetIcon = getCTAWidgetIcon();
                var ctaText = jQuery(".test_textarea").val().toHtmlEntities();

                if(jQuery("#chaty_default_state").val() == "open") {
                    ctaText = "";
                }

                var ctaToolTipPosition = toolTipPosition;
                if(jQuery("input[name='chaty_icons_view']:checked").val() == "horizontal") {
                    if(widgetPosition == "left") {
                        ctaToolTipPosition = "right";
                    } else {
                        ctaToolTipPosition = "left";
                    }
                }

                if(jQuery("input[name='cta_type']:checked").val() == "chat-view") {
                    if(widgetPosition == "left") {
                        ctaToolTipPosition = "right";
                        toolTipPosition = "right";
                    } else {
                        ctaToolTipPosition = "left";
                        toolTipPosition = "left";
                    }
                }

                if(!isEmpty(ctaText)) {
                    ctaText = htmlDecode(ctaText);
                }

                var widgetButton = '<div class="csaas-channel csaas-cta-main has-on-hover csaas-tooltip '+ctaToolTipPosition+' active" data-widget="0" >' +
                    '<span class="on-hover-text">'+ctaText.toHtmlEntities()+'</span>' +
                    '<div class="csaas-cta-button">' +
                    '<button type="button" class="open-csaas">' +
                    widgetIcon +
                    '</button>' +
                    '<button type="button" class="open-csaas-channel"></button>' +
                    '</div>' +
                    '</div>';
                jQuery("#csaas-widget-0 .csaas-i-trigger").html(widgetButton);

                var closeButtonText = jQuery("input[name='cht_close_button_text']").val();
                if(!isEmpty(closeButtonText)) {
                    closeButtonText = htmlDecode(closeButtonText);
                }
                /* close button */
                var closeHtml = '<div class="csaas-channel csaas-cta-close '+toolTipPosition+'">' +
                    '<div class="csaas-cta-button"><button type="button">' +
                    '<span class="csaas-svg">' +
                    '<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="26" cy="26" rx="26" ry="26" fill="'+ jQuery("input[name='cht_color']:checked").val().toHtmlEntities() +'"></ellipse><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="white"></rect><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="white"></rect></svg>' +
                    '</span>' +
                    '</button>' +
                    '</div>' +
                    '</div>';
                jQuery("#csaas-widget-0 .csaas-i-trigger").append(closeHtml);
            }

            if(jQuery("#chaty_default_state").val() != "open" || previewChannelList.length == 1) {
                checkForPendingMessage();
                checkForWidgetAnimation();
            }

            var extraSpace = 0;
            /* check for close button */
            if(jQuery("#chaty_default_state").val() == "open" && !jQuery("#cht_close_button").is(":checked") && jQuery("input[name='cta_type']:checked").val() == "simple-view") {
                jQuery("#csaas-widget-0 .csaas-widget").addClass("csaas-no-close-button");
                extraSpace = 1;
            }

            /* check for State */
            if(jQuery("#chaty_default_state").val() == "hover") {
                jQuery("#csaas-widget-0").addClass("open-on-hover");
            } else if(jQuery("#chaty_default_state").val() == "open") {
                jQuery("#csaas-widget-0 .csaas-widget").addClass("default-open");
                jQuery("#csaas-widget-0 .csaas-widget:not(.has-single)").addClass("csaas-open");
                if(!jQuery("#cht_close_button").is(":checked")) {
                    jQuery("#csaas-widget-0 .csaas-widget:not(.has-single)").addClass("csaas-open");
                }
            }


            var widgetSize = parseInt(jQuery("#custom-widget-size-input").val() * 2 / 3);
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .custom-csaas-image {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .facustom-icon { width: "+widgetSize+"px; height: "+widgetSize+"px; line-height: "+widgetSize+"px; font-size:"+(parseInt(widgetSize/2))+"px; text-align: center; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel a img {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel a {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .csaas-custom-icon {display:block; width: "+widgetSize+"px; height: "+widgetSize+"px; line-height: "+widgetSize+"px; font-size: "+parseInt(widgetSize/2)+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel button {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .csaas-svg {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .custom-agent-image {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .facustom-icon {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .custom-agent-image img {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .csaas-svg img {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list .csaas-channel .csaas-svg .csaas-custom-channel-icon {width: "+widgetSize+"px; height: "+widgetSize+"px; line-height: "+widgetSize+"px; display: block; font-size:"+(parseInt(widgetSize/2))+"px; }";


            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .custom-csaas-image {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .facustom-icon { width: "+widgetSize+"px; height: "+widgetSize+"px; line-height: "+widgetSize+"px; font-size:"+(parseInt(widgetSize/2))+"px; text-align: center; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel a img {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel a {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .csaas-custom-icon {display:block; width: "+widgetSize+"px; height: "+widgetSize+"px; line-height: "+widgetSize+"px; font-size: "+parseInt(widgetSize/2)+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel button {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .csaas-svg {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .custom-agent-image {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .facustom-icon {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .custom-agent-image img {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .csaas-svg img {width: "+widgetSize+"px; height: "+widgetSize+"px; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-channels .csaas-channel .csaas-svg .csaas-custom-channel-icon {width: "+widgetSize+"px; height: "+widgetSize+"px; line-height: "+widgetSize+"px; display: block; font-size:"+(parseInt(widgetSize/2))+"px; }";

            var wp_bottom_size = widgetSize + 15 + 5;
            advanceCustomCSS += ".csaas-outer-forms.active { bottom: "+ wp_bottom_size +"px; }";

            if(jQuery("input[name='chaty_icons_view']:checked").val() == "horizontal" && jQuery("input[name='cta_type']:checked").val() == "simple-view") {
                jQuery("#csaas-widget-0 .csaas-widget").addClass("hor-mode");
                advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list {width: "+(activeChannels*(widgetSize+8))+"px; }";
                advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list {height: "+(widgetSize)+"px; }";
                // customCSS += "#csaas-widget-0 .csaas-widget.left-position.hor-mode .csaas-channel-list {left: "+(widgetSize+8)+"px; }";
                // customCSS += "#csaas-widget-0 .csaas-widget.right-position.hor-mode .csaas-channel-list {right: "+(widgetSize+8)+"px; }";

                for(var i=0; i<=activeChannels; i++) {
                    advanceCustomCSS += "#csaas-widget-0 .csaas-widget.left-position.hor-mode.csaas-open .csaas-channel-list .csaas-channel:nth-child("+(i+1)+") {-webkit-transform: translateX("+((widgetSize+8)*(activeChannels - i - extraSpace))+"px); transform: translateX("+((widgetSize+8)*(activeChannels - i - extraSpace))+"px);}";
                    advanceCustomCSS += "#csaas-widget-0 .csaas-widget.right-position.hor-mode.csaas-open .csaas-channel-list .csaas-channel:nth-child("+(i+1)+") {-webkit-transform: translateX(-"+((widgetSize+8)*(activeChannels - i - extraSpace))+"px); transform: translateX(-"+((widgetSize+8)*(activeChannels - i - extraSpace))+"px);}";
                }
            } else {
                //customCSS += "#csaas-widget-"+widgetRecord.id+" .csaas-channel-list {bottom: "+(widgetSize+4)+"px; }";
                advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list {height: "+(activeChannels*(widgetSize+8))+"px; }";
                advanceCustomCSS += "#csaas-widget-0 .csaas-channel-list {width: "+(widgetSize+8)+"px; }";

                for(var i=0; i<=activeChannels; i++) {
                    advanceCustomCSS += "#csaas-widget-0 .csaas-open .csaas-channel-list .csaas-channel:nth-child("+(i+1)+") {-webkit-transform: translateY(-"+((widgetSize+8)*(activeChannels - i - extraSpace))+"px); transform: translateY(-"+((widgetSize+8)*(activeChannels - i - extraSpace))+"px);}";
                }
            }

            /* set on hover text color */
            advanceCustomCSS += "#csaas-widget-0 .csaas-tooltip:after {background-color: "+jQuery("#cht_cta_bg_color").val()+"; color: "+jQuery("#cht_cta_text_color").val()+"}";
            advanceCustomCSS += "#csaas-widget-0 .csaas-tooltip.top:before {border-top-color: "+jQuery("#cht_cta_bg_color").val()+"; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-tooltip.left:before {border-left-color: "+jQuery("#cht_cta_bg_color").val()+"; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-tooltip.right:before {border-right-color: "+jQuery("#cht_cta_bg_color").val()+";}";

            advanceCustomCSS += "#csaas-widget-0 .on-hover-text {background-color: "+jQuery("#cht_cta_bg_color").val()+"; color: "+jQuery("#cht_cta_text_color").val()+"}";
            advanceCustomCSS += "#csaas-widget-0 .csaas-tooltip.top .on-hover-text:before {border-top-color: "+jQuery("#cht_cta_bg_color").val()+"; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-tooltip.left .on-hover-text:before {border-left-color: "+jQuery("#cht_cta_bg_color").val()+"; }";
            advanceCustomCSS += "#csaas-widget-0 .csaas-tooltip.right .on-hover-text:before {border-right-color: "+jQuery("#cht_cta_bg_color").val()+";}";

            advanceCustomCSS += "#csaas-form-0-csaas-chat-view .csaas-view-header {background-color: "+jQuery("#cta_header_bg_color").val()+";}";
            advanceCustomCSS += "#csaas-form-0-csaas-chat-view .csaas-view-header {color: "+jQuery("#cta_header_text_color").val()+";}";
            advanceCustomCSS += "#csaas-form-0-csaas-chat-view .csaas-view-header .csaas-close-view-list svg {fill: "+jQuery("#cta_header_text_color").val()+";}";


            /* Contact Us Button */
            advanceCustomCSS += "#csaas-submit-button-0 {color: "+jQuery("#button_text_color_for_Contact_Us").val()+" !important; background: "+jQuery("#button_bg_color_for_Contact_Us").val()+" !important;}"
            advanceCustomCSS += ".csaas-contact-form-box .csaas-contact-form-title {background-color: "+ jQuery("#title_bg_color_for_Contact_Us").val() +";}";

            updateWidgetViews();

            jQuery("#custom-css").html("<style>"+advanceCustomCSS+"</style>");
            jQuery(".csaas-outer-forms, .csaas-chat-view").show();
            jQuery(".csaas-outer-forms, .csaas-chat-view").addClass(widgetPosition);

            if(jQuery("#cht_widget_font").val() != "") {
                var fontFamily = jQuery("#cht_widget_font").val();
                if(fontFamily == "System Stack") {
                    fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif";
                }
                jQuery("#csaas-widget-0").css("font-family", fontFamily);
            }
        }
    }

    if(imageDataEvent != false && jQuery("#testUpload").val() != "" && jQuery("input[name='widget_icon']:checked").val() == "chat-image") {
        if(jQuery("#cta-image").length) {
            var output = document.getElementById('cta-image');
            output.src = URL.createObjectURL(imageDataEvent.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // free memory
                //jQuery("#image-upload").addClass("has-custom-image");
            }
        }
    }
}

function makeChatyChatView() {
    var widgetId = 0;
    var widgetIndex = 0 ;
    if (widgetIndex == null) {
        widgetIndex = -1;
    }
    var bodyMsg = htmlDecode(jQuery("#cta_body_text").val());
    var headMsg = htmlDecode(jQuery("#cta_heading_text").val());
    var iframeData = jQuery("#wp-cta_body_text-wrap").find("iframe");
    bodyMsg = iframeData.contents().find("body").html();
    var formHtml = "";
    formHtml += "<div style='display: none' class='csaas-chat-view csaas-chat-view-"+widgetId+" csaas-form-" + widgetId + "' data-channel='csaas-chat-view' id='csaas-form-" + widgetId + "-csaas-chat-view' data-widget='" + widgetId + "' data-index='" + widgetIndex + "'>";
    formHtml += "<div class='csaas-view-body'>";
    formHtml += "<div class='csaas-view-header'>"+headMsg;
    formHtml += "<div role='button' class='csaas-close-view-list'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 330'><path d='M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001s-5.858 15.355 0 21.213l150.004 150a15 15 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z'/></svg></div>";
    formHtml += "</div>";
    formHtml += "<div class='csaas-view-content'>";
    formHtml += "<div class='csaas-top-content'>";
    formHtml += bodyMsg;
    formHtml += "</div>";
    formHtml += "<div class='csaas-view-channels'>";
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "</div>";
    jQuery("#csaas-widget-"+widgetId).append(formHtml);
}

function myCustomOnChangeHandler() {
    change_custom_preview();
}

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

function updateWidgetViews() {
    jQuery("#csaas-widget-0").addClass("active");
}

function checkForWidgetAnimation() {
    if(jQuery("#chaty_attention_effect").val() != "none" && jQuery("#chaty_attention_effect").val() != "") {
        jQuery("#csaas-widget-0").attr("data-animation", jQuery("#chaty_attention_effect").val());
        if(jQuery("#csaas-widget-0 .csaas-widget").hasClass("has-single")) {
            jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel a").addClass("csaas-animation-"+jQuery("#chaty_attention_effect").val());
        } else {
            jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-cta-main .csaas-cta-button").addClass("csaas-animation-"+jQuery("#chaty_attention_effect").val());
        }
    }
}

function checkForPendingMessage() {
    if(jQuery("#cht_pending_messages").is(":checked") && jQuery("#cht_number_of_messages").val() != "") {
        var attention_effect = jQuery("#chaty_attention_effect").val();
        if(jQuery("#csaas-widget-0 .csaas-widget").hasClass("has-single")) {
            if (attention_effect == "bounce" || attention_effect == "jump" || attention_effect == "waggle" || attention_effect == "pulse" || attention_effect == "pulse-icon" || attention_effect == "floating") {
                jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel a").append("<span class='ch-pending-msg'>" + jQuery("#cht_number_of_messages").val() + "</span>");
            } else {
                jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-channel a").after("<span class='ch-pending-msg'>" + jQuery("#cht_number_of_messages").val() + "</span>");
            }
        } else {
            if (attention_effect == "bounce" || attention_effect == "jump" || attention_effect == "waggle" || attention_effect == "pulse" || attention_effect == "pulse-icon" || attention_effect == "floating") {
                jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-cta-main .csaas-cta-button").append("<span class='ch-pending-msg'>" + jQuery("#cht_number_of_messages").val() + "</span>");
            } else {
                jQuery("#csaas-widget-0 .csaas-i-trigger .csaas-cta-main").append("<span class='ch-pending-msg'>" + jQuery("#cht_number_of_messages").val() + "</span>");
            }
        }

        jQuery(".ch-pending-msg").css("color", jQuery("#cht_number_color").val());
        jQuery(".ch-pending-msg").css("background-color", jQuery("#cht_number_bg_color").val());
    }
}

function getCTAWidgetIcon() {
    var widgetIcon = 'chat-base';
    if(jQuery("input[name='widget_icon']:checked").val() != "") {
        widgetIcon = jQuery("input[name='widget_icon']:checked").val();
    }
    if(widgetIcon == "chat-image") {
        if(jQuery("#elPreviewImage img").length) {
            return "<span class='csaas-svg' style='background: "+jQuery("input[name='cht_color']:checked").val().toHtmlEntities()+"'><img id='cta-image' src='"+jQuery("#elPreviewImage img").attr("src")+"' alt='Chaty Widget' /></span>";
        }
        widgetIcon = 'chat-base';
    }

    return '<span class="csaas-svg">'+getSvgIcon(widgetIcon, jQuery("input[name='cht_color']:checked").val().toHtmlEntities())+"</span>";
}
function getSvgIcon(iconName, widgetColor) {
    switch(iconName) {
        case"chat-smile":
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-496.8 507.1 54 54" style="enable-background:new -496.8 507.1 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill:#FFFFFF;} .chaty-sts2{fill:none;stroke:#808080;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}</style><g><circle cx="-469.8" cy="534.1" r="27" fill="' + widgetColor + '"/></g><path class="chaty-sts1" d="M-459.5,523.5H-482c-2.1,0-3.7,1.7-3.7,3.7v13.1c0,2.1,1.7,3.7,3.7,3.7h19.3l5.4,5.4c0.2,0.2,0.4,0.2,0.7,0.2c0.2,0,0.2,0,0.4,0c0.4-0.2,0.6-0.6,0.6-0.9v-21.5C-455.8,525.2-457.5,523.5-459.5,523.5z"/><path class="chaty-sts2" d="M-476.5,537.3c2.5,1.1,8.5,2.1,13-2.7"/><path class="chaty-sts2" d="M-460.8,534.5c-0.1-1.2-0.8-3.4-3.3-2.8"/></svg>';
        case"chat-bubble":
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-496.9 507.1 54 54" style="enable-background:new -496.9 507.1 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill:#FFFFFF;}</style><g><circle  cx="-469.9" cy="534.1" r="27" fill="' + widgetColor + '"/></g><path class="chaty-sts1" d="M-472.6,522.1h5.3c3,0,6,1.2,8.1,3.4c2.1,2.1,3.4,5.1,3.4,8.1c0,6-4.6,11-10.6,11.5v4.4c0,0.4-0.2,0.7-0.5,0.9   c-0.2,0-0.2,0-0.4,0c-0.2,0-0.5-0.2-0.7-0.4l-4.6-5c-3,0-6-1.2-8.1-3.4s-3.4-5.1-3.4-8.1C-484.1,527.2-478.9,522.1-472.6,522.1z   M-462.9,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-464.6,534.6-463.9,535.3-462.9,535.3z   M-469.9,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-471.7,534.6-471,535.3-469.9,535.3z   M-477,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-478.8,534.6-478.1,535.3-477,535.3z"/></svg>';
        case"chat-db":
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-496 507.1 54 54" style="enable-background:new -496 507.1 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill:#FFFFFF;}</style><g><circle  cx="-469" cy="534.1" r="27" fill="' + widgetColor + '"/></g><path class="chaty-sts1" d="M-464.6,527.7h-15.6c-1.9,0-3.5,1.6-3.5,3.5v10.4c0,1.9,1.6,3.5,3.5,3.5h12.6l5,5c0.2,0.2,0.3,0.2,0.7,0.2c0.2,0,0.2,0,0.3,0c0.3-0.2,0.5-0.5,0.5-0.9v-18.2C-461.1,529.3-462.7,527.7-464.6,527.7z"/><path class="chaty-sts1" d="M-459.4,522.5H-475c-1.9,0-3.5,1.6-3.5,3.5h13.9c2.9,0,5.2,2.3,5.2,5.2v11.6l1.9,1.9c0.2,0.2,0.3,0.2,0.7,0.2c0.2,0,0.2,0,0.3,0c0.3-0.2,0.5-0.5,0.5-0.9v-18C-455.9,524.1-457.5,522.5-459.4,522.5z"/></svg>';
        default:
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-496 507.7 54 54" style="enable-background:new -496 507.7 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill: #FFFFFF;}.chaty-st0{fill: #808080;}</style><g><circle cx="-469" cy="534.7" r="27" fill="' + widgetColor + '"/></g><path class="chaty-sts1" d="M-459.9,523.7h-20.3c-1.9,0-3.4,1.5-3.4,3.4v15.3c0,1.9,1.5,3.4,3.4,3.4h11.4l5.9,4.9c0.2,0.2,0.3,0.2,0.5,0.2 h0.3c0.3-0.2,0.5-0.5,0.5-0.8v-4.2h1.7c1.9,0,3.4-1.5,3.4-3.4v-15.3C-456.5,525.2-458,523.7-459.9,523.7z"/><path class="chaty-st0" d="M-477.7,530.5h11.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-11.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,530.8-478.2,530.5-477.7,530.5z"/><path class="chaty-st0" d="M-477.7,533.5h7.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-7.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,533.9-478.2,533.5-477.7,533.5z"/></svg>'
    }
}

function getChannelSetting(channel, widgetId, toolTipPosition) {
    var extraClass = "";
    if(jQuery("#chaty-social-"+channel).hasClass("has-agent-view")) {
        createAgentList(channel, widgetId);

        channelIcon = getChannelIcon(channel, widgetId);
        channelLink = getChannelURL(channel, channelIcon, toolTipPosition, widgetId);

        return "<div data-form='csaas-form-"+widgetId+"-"+channel+"' class='csaas-channel csaas-agent-button csaas-agent-"+widgetId+"-"+channel+" " + channel + "-channel" + extraClass + "' id='" + channel + "-" + widgetId + "-channel' data-id='" + channel + "-" + widgetId + "' data-widget='" + widgetId + "' data-channel='" + channel + "'>" + channelLink + "</div>";
    } else {
        var channelIcon = getChannelIcon(channel, widgetId);
        var channelLink = getChannelURL(channel, channelIcon, toolTipPosition, widgetId);

        return "<div class='csaas-channel " + channel + "-channel" + extraClass + "' id='" + channel + "-" + widgetId + "-channel' data-id='" + channel + "-" + widgetId + "' data-widget='" + widgetId + "' data-channel='" + channel + "'>" + channelLink + "</div>";
    }
}

function createAgentList(channel, widgetId) {
    var isDesktop = jQuery("#previewDesktop").is(":checked")?true:false;
    var formHtml = "";
    var widgetIndex = 0;
    formHtml += "<div style='display:none;' class='csaas-outer-forms csaas-agent-data csaas-agent-data-"+widgetId+" csaas-form-"+widgetId+"' data-channel='"+channel+"' id='csaas-form-"+widgetId+"-"+channel+"' data-widget='"+widgetId+"' data-index='"+widgetIndex+"'>";
    formHtml += "<div class='csaas-form'>";
    formHtml += "<div class='csaas-form-body'>";
    formHtml += "<div role='button' class='csaas-close-agent-list'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 330'><path d='M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001s-5.858 15.355 0 21.213l150.004 150a15 15 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z'/></svg></div>";
    formHtml += "<div class='csaas-agent-header agent-info-"+widgetId+"-"+channel+"'>";
    if(!isEmpty(jQuery("#cht_social_agent_title_"+channel).val())) {
        formHtml += "<div class='agent-main-header'>"+jQuery("#cht_social_agent_title_"+channel).val().toHtmlEntities()+"</div>";
    }
    if(!isEmpty(jQuery("#cht_social_agent_sub_title_"+channel).val())) {
        formHtml += "<div class='agent-sub-header'>"+jQuery("#cht_social_agent_sub_title_"+channel).val().toHtmlEntities()+"</div>";
    }
    formHtml += "</div>";
    if(jQuery("#chaty-social-"+channel+" .chaty-agent-list .agent-list .agent-channel-setting").length) {
        jQuery("#chaty-social-"+channel+" .chaty-agent-list .agent-list .agent-channel-setting").each(function(){
            var thisIndex = jQuery(this).data("item");
            //if((isDesktop && jQuery("#"+channel+"Desktop-"+thisIndex).is(":checked")) || (!isDesktop && jQuery("#"+channel+"Mobile-"+thisIndex).is(":checked"))) {
            var agentIcon = jQuery("#image_agent_data_" + channel + "-" + thisIndex).html();
            if (jQuery("#image_agent_data_" + channel + "-" + thisIndex).hasClass("img-active")) {
                agentIcon = "<div class='chaty-icon img-active'>" + agentIcon + "</div>";
            } else if (jQuery("#image_agent_data_" + channel + "-" + thisIndex).hasClass("icon-active")) {
                agentIcon = "<div class='chaty-icon icon-active'>" + agentIcon + "</div>";
            } else {
                agentIcon = "<div class='chaty-icon'>" + agentIcon + "</div>";
            }
            var agentLink = getAgentURL(channel, widgetId, thisIndex, agentIcon, jQuery("#agent-" + channel + "-" + thisIndex + " .chaty-agent-name").val().toHtmlEntities());
            formHtml += "<div class='csaas-agent agent-info-" + widgetId + "-" + channel + " agent-info-" + thisIndex + "'>" + agentLink + "</div>";
            //}
        });
    }
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "</div>";
    jQuery(".chaty-preview").append(formHtml);

    jQuery(".csaas-agent-header.agent-info-"+widgetId+"-"+channel).css("background", jQuery("#agent_head_bg_color_"+channel).val());
    jQuery(".csaas-agent-header.agent-info-"+widgetId+"-"+channel).css("color", jQuery("#agent_head_text_color_"+channel).val());
}

function getAgentURL(channel, widgetId, key, agentIcon, agentTitle) {
    return "<a href='javascript:;' ><span class='csaas-agent-icon'>"+agentIcon+"</span><span class='csaas-agent-title'>"+agentTitle+"</span></a>";
}

function getChannelIcon(channel, widgetId) {
    if(!jQuery("#chaty-social-"+channel).hasClass("has-agent-view")) {
        if (jQuery("#chaty_image_" + channel).length) {
            var widgetIcon = jQuery("#chaty_image_" + channel).html();
            if (jQuery("#chaty_image_" + channel).hasClass("icon-active")) {
                return "<div class='chaty-icon icon-active'>" + widgetIcon + "</div>";
            } else if (jQuery("#chaty_image_" + channel).hasClass("img-active")) {
                return "<div class='chaty-icon img-active'>" + widgetIcon + "</div>";
            }
            return "<div class='chaty-icon'>" + widgetIcon + "</div>";
        }
    } else {
        if (jQuery("#image_agent_data_agent-" + channel).length) {
            var widgetIcon = jQuery("#image_agent_data_agent-" + channel).html();
            if (jQuery("#image_agent_data_agent-" + channel).hasClass("icon-active")) {
                return "<div class='chaty-icon icon-active'>" + widgetIcon + "</div>";
            } else if (jQuery("#image_agent_data_agent-" + channel).hasClass("img-active")) {
                return "<div class='chaty-icon img-active'>" + widgetIcon + "</div>";
            }
            return "<div class='chaty-icon'>" + widgetIcon + "</div>";
        }
    }
}

function getChannelURL(channel, channelIcon, toolTipPosition, widgetId) {
    var extraClass = "";

    if(!jQuery("#chaty-social-"+channel).hasClass("has-agent-view")) {
        if (channel == "Whatsapp") {
            if (jQuery("#chaty-social-"+channel+" .embedded_window-checkbox").is(":checked") &&jQuery("#chaty-social-"+channel+" .chaty-whatsapp-setting-textarea").val() != "") {
                extraClass += " has-csaas-box csaas-whatsapp-form";
                startMakingWhatsAppPopup(channel, widgetId);
            }
        } else if(channel == "WeChat") {
            if(jQuery(".remove-qr-code-"+channel).hasClass("active")) {
                extraClass += " has-csaas-box csaas-qr-code-form";
                startMakingWeChatChannel(channel, 0);
            }
        } else if(channel == "Contact_Us") {
            extraClass += " has-csaas-box csaas-contact-us-form";
            startMakingContactForm(channel, 0);
        }
    }
    if(!jQuery("#chaty-social-"+channel).hasClass("has-agent-view")) {
        return "<a href='javascript:;' class='csaas-tooltip " + toolTipPosition + extraClass + "' data-form='csaas-form-" + widgetId + "-" + channel + "' data-hover='" + jQuery("#chaty-social-" + channel + " .chaty-title").val().toHtmlEntities() + "'>" + channelIcon + "</a>";
    } else {
        return "<a href='javascript:;' class='csaas-tooltip " + toolTipPosition + extraClass + "' data-form='csaas-form-" + widgetId + "-" + channel + "' data-hover='" + jQuery("#cht_social_agent_text_" + channel ).val().toHtmlEntities() + "'>" + channelIcon + "</a>";
    }
}

/**
 * Convert a string to HTML entities
 */
String.prototype.toHtmlEntities = function() {
    return this.replace(/./gm, function(s) {
        // return "&#" + s.charCodeAt(0) + ";";
        return (s.match(/[a-z0-9\s]+/i)) ? s : "&#" + s.charCodeAt(0) + ";";
    });
};

/**
 * Create string from HTML entities
 */
String.fromHtmlEntities = function(string) {
    return (string+"").replace(/&#\d+;/gm,function(s) {
        return String.fromCharCode(s.match(/\d+/gm)[0]);
    })
};

function startMakingContactForm(channel, widgetId) {
    var formHtml = "";
    var widgetIndex = 0;
    formHtml += "<div style='display:none;' class='csaas-outer-forms csaas-contact-form-box csaas-form-"+widgetId+"' data-channel='"+channel+"' id='csaas-form-"+widgetId+"-"+channel+"' data-widget='"+widgetId+"' data-index='"+widgetIndex+"'>";
    formHtml += "<div class='csaas-form'>";
    formHtml += "<div class='csaas-form-body'>";
    formHtml += "<div role='button' class='close-csaas-form'><div class='csaas-close-button'></div></div>";
    //formHtml += "<form class='csaas-ajax-contact-form' id='csaas-ajax-contact-form-"+widgetIndex+"' method='post' data-channel='"+channel+"' data-widget='"+widgetId+"' >";
    formHtml += "<div class='csaas-contact-form-body'>";
    formHtml += "<div class='csaas-contact-form-title'>"+jQuery("#cht_social_message_"+channel+"_form_title").val().toHtmlEntities()+"</div>";
    formHtml += "<div class='csaas-contact-inputs'>";

    // if(jQuery("#field_for_Contact_Us_name").is(":checked")) {
    //     formHtml += "<div class='csaas-contact-input'>";
    //     formHtml += "<input type='text' readonly class='csaas-input-field' placeholder='" + jQuery("#placeholder_for_Contact_Us_name").val().toHtmlEntities() + "' />";
    //     formHtml += "</div>";
    // }
    // if(jQuery("#field_for_Contact_Us_email").is(":checked")) {
    //     formHtml += "<div class='csaas-contact-input'>";
    //     formHtml += "<input type='text' readonly class='csaas-input-field' placeholder='" + jQuery("#placeholder_for_Contact_Us_email").val().toHtmlEntities() + "' />";
    //     formHtml += "</div>";
    // }
    // if(jQuery("#field_for_Contact_Us_phone").is(":checked")) {
    //     formHtml += "<div class='csaas-contact-input'>";
    //     formHtml += "<input type='text' readonly class='csaas-input-field' placeholder='" + jQuery("#placeholder_for_Contact_Us_phone").val().toHtmlEntities() + "' />";
    //     formHtml += "</div>";
    // }
    // if(jQuery("#field_for_Contact_Us_message").is(":checked")) {
    //     formHtml += "<div class='csaas-contact-input'>";
    //     formHtml += "<textarea type='text' readonly class='csaas-textarea-field' placeholder='" + jQuery("#placeholder_for_Contact_Us_message").val().toHtmlEntities() + "' ></textarea>";
    //     formHtml += "</div>";
    // }

    jQuery("#chaty-social-Contact_Us .contact_form_custom_value").each(function (){
        if(jQuery(this).closest(".field-setting-col").find(".chaty-switch input[type='checkbox']").is(":checked")) {
            formHtml += "<div class='csaas-contact-label'>";
            formHtml += "<label>"+jQuery(this).closest(".field-setting-col").find(".label-input input").val()+"</label>"
            formHtml += "</div>";
            formHtml += "<div class='csaas-contact-input'>"
            if (jQuery(this).data("type") == "textarea") {
                formHtml += "<textarea readonly class='csaas-textarea-field' placeholder='" + jQuery(this).val() + "' ></textarea>";
            } else if (jQuery(this).data("type") == "select") {
                formHtml += "<select style='pointer-events: none;' class='csaas-select-field'><option>"+ jQuery(this).find("option:first-child").text() +"</option></select>"
            } else {
                formHtml += "<input type='" + jQuery(this).attr("type") + "' readonly class='csaas-input-field' placeholder='" + jQuery(this).val() + "' />";
            }
            formHtml += "</div>";
        }
    });
    /*$.each(channel.contact_fields, function (key, contactField) {
    formHtml += "<div class='csaas-contact-input'>";
        var isRequired = isTrue(contactField.is_required)?"is-required":"";
        if(contactField.type == "textarea") {
        formHtml += "<textarea type='" + contactField.type + "' class='csaas-textarea-field "+isRequired+" field-"+contactField.field+"' placeholder='" + contactField.placeholder + "' name='" + contactField.field + "' id='" + contactField.field + "-" + widgetId + "' ></textarea>"
        } else {
        formHtml += "<input type='" + contactField.type + "' class='csaas-input-field "+isRequired+" field-"+contactField.field+"' placeholder='" + contactField.placeholder + "' name='" + contactField.field + "' id='" + contactField.field + "-" + widgetId + "' />"
        }
        formHtml += "</div>";
    });*/
    formHtml += "<div class='csaas-contact-form-button'><button type='submit' id='csaas-submit-button-"+widgetId+"' class='csaas-submit-button'>"+jQuery("#button_text_for_"+channel).val().toHtmlEntities()+"</button></div>";
    formHtml += "</div>"; // csaas-contact-inputs
    formHtml += "</div>"; // csaas-contact-form-body
    //formHtml += "</form>";
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "</div>";
    jQuery(".chaty-preview").append(formHtml);
}

function startMakingWeChatChannel(channel, widgetId) {
    var formHtml = "";
    var widgetIndex = 0;
    formHtml += "<div style='display:none;' class='csaas-outer-forms csaas-form-"+widgetId+"' data-channel='"+channel+"' id='csaas-form-"+widgetId+"-"+channel+"' data-widget='"+widgetId+"' data-index='"+widgetIndex+"'>";
    formHtml += "<div class='csaas-form'>";
    formHtml += "<div class='csaas-form-body'>";
    formHtml += "<div role='button' class='close-csaas-form is-whatsapp-btn'><div class='csaas-close-button'></div></div>";
    formHtml += "<div class='qr-code-image'><img src='"+jQuery("#cht_social_image_src_"+channel).attr("src")+"' alt='WeChat' /></div>";
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "</div>";
    jQuery(".chaty-preview").append(formHtml);
}

function startMakingWhatsAppPopup(channel, widgetId) {
    const currentDate = new Date();
    var currentMinute = (currentDate.getMinutes() < 10) ? "0"+currentDate.getMinutes() : currentDate.getMinutes();
    var currentHour = (currentDate.getHours() < 10) ? "0"+currentDate.getHours() : currentDate.getHours();
    const time = currentHour + ":" + currentMinute;
    var formHtml = "";
    var widgetIndex = widgetId;
    var formAction = "";
    var formTarget = "";
    formHtml += "<div style='display:none;' class='csaas-outer-forms csaas-popup-whatsapp-form csaas-form-"+widgetId+"' data-channel='"+channel+"' id='csaas-form-"+widgetId+"-"+channel+"' data-widget='"+widgetId+"' data-index='"+widgetIndex+"'>";
    formHtml += "<div class='csaas-whatsapp-form-info'>";
    formHtml += "<div class='csaas-whatsapp-header'>";
    formHtml += "<div class='header-wp-icon'>";
    formHtml += '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"> <g filter="url(#filter0_f_9477_7201)"> <path d="M9.95924 25.2858L10.3674 25.5276C12.0818 26.545 14.0475 27.0833 16.052 27.0842H16.0562C22.2122 27.0842 27.2221 22.0753 27.2247 15.919C27.2258 12.9357 26.0652 10.1303 23.9565 8.01998C22.9223 6.97924 21.6919 6.15397 20.3365 5.59195C18.9812 5.02992 17.5278 4.74231 16.0606 4.74576C9.89989 4.74576 4.88975 9.75407 4.88756 15.91C4.88453 18.0121 5.47648 20.0722 6.59498 21.852L6.86071 22.2742L5.73223 26.394L9.95924 25.2858ZM2.50586 29.5857L4.41235 22.6249C3.23657 20.5878 2.618 18.2768 2.61873 15.9091C2.62183 8.50231 8.64941 2.47656 16.0564 2.47656C19.6508 2.47839 23.0245 3.87717 25.5618 6.41629C28.0991 8.95542 29.4952 12.3305 29.4939 15.9199C29.4906 23.3262 23.4621 29.353 16.0562 29.353H16.0504C13.8016 29.3521 11.592 28.788 9.62923 27.7177L2.50586 29.5857Z" fill="#B3B3B3"/> </g> <path d="M2.36719 29.447L4.27368 22.4862C3.09587 20.4442 2.47721 18.1278 2.48005 15.7705C2.48316 8.36364 8.51074 2.33789 15.9177 2.33789C19.5121 2.33972 22.8859 3.73849 25.4232 6.27762C27.9605 8.81675 29.3565 12.1918 29.3552 15.7812C29.3519 23.1875 23.3234 29.2143 15.9175 29.2143H15.9117C13.663 29.2134 11.4533 28.6493 9.49056 27.5791L2.36719 29.447Z" fill="white"/> <path d="M15.715 3.84769C9.17146 3.84769 3.85 9.16696 3.84767 15.7051C3.84445 17.9377 4.47318 20.1257 5.66119 22.016L5.94343 22.4646L4.48888 27.2525L9.23469 25.663L9.66824 25.9199C11.4891 27.0005 13.5769 27.5719 15.7061 27.5731H15.7105C22.249 27.5731 27.5705 22.2532 27.573 15.7146C27.5779 14.1562 27.2737 12.6123 26.6778 11.1722C26.082 9.73214 25.2064 8.42458 24.1017 7.3252C23.0032 6.21981 21.6963 5.34329 20.2567 4.74637C18.8171 4.14946 17.2734 3.844 15.715 3.84769Z" fill="#25D366"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0858 9.60401C11.8138 9.00922 11.5276 8.99717 11.2692 8.98687L10.5736 8.97852C10.3316 8.97852 9.93846 9.0679 9.60608 9.42544C9.27369 9.78297 8.33594 10.6471 8.33594 12.4046C8.33594 14.1622 9.63628 15.8605 9.81747 16.0991C9.99866 16.3377 12.3277 20.0594 16.0162 21.4913C19.0813 22.6813 19.705 22.4446 20.3706 22.3852C21.0361 22.3257 22.5175 21.521 22.8197 20.6869C23.1219 19.8527 23.1221 19.138 23.0315 18.9886C22.9409 18.8391 22.6989 18.7503 22.3357 18.5716C21.9725 18.3928 20.1888 17.5287 19.8562 17.4094C19.5236 17.2901 19.2818 17.2308 19.0396 17.5883C18.7975 17.9459 18.1029 18.7501 17.8911 18.9886C17.6793 19.227 17.4679 19.2569 17.1047 19.0783C16.7416 18.8998 15.5731 18.5224 14.1867 17.3054C13.108 16.3585 12.3799 15.1892 12.1679 14.8318C11.9559 14.4745 12.1454 14.2809 12.3274 14.1029C12.4902 13.9428 12.6901 13.6858 12.8719 13.4773C13.0537 13.2688 13.1135 13.1197 13.2343 12.8817C13.3551 12.6437 13.2949 12.4346 13.2041 12.256C13.1133 12.0774 12.4083 10.3105 12.0858 9.60401Z" fill="white"/> <defs> <filter id="filter0_f_9477_7201" x="1.21611" y="1.18682" width="29.5678" height="29.6889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.644873" result="effect1_foregroundBlur_9477_7201"/> </filter> </defs> </svg>';
    formHtml += "</div>";
    formHtml += "<div class='header-wp-title'>";
    formHtml += jQuery("#wp_popup_headline").val().toHtmlEntities();
    formHtml += "</div>";
    formHtml += "<div class='whatsapp-form-close-btn'>";
    formHtml += '<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7.31429 8L14 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>';
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "<div class='csaas-whatsapp-body'>";
    if(jQuery("#wp_popup_profile").val() != "") {
        formHtml += "<div class='wp-profile-img'>";
        formHtml += "<img src='" + jQuery("#wp_popup_profile").val() + "'>"
        formHtml += "</div>";
    }
    formHtml += "<div class='csaas-whatsapp-message'>";
    formHtml += "<div class='csaas-whatsapp-message-nickname'>"+jQuery("#wp_popup_nickname").val().toHtmlEntities()+"</div>";
    formHtml += "<div class='csaas-whatsapp-message-content'></div>";
    formHtml += "<div class='csaas-whatsapp-message-time'>"+time+"</div>"
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "<div class='csaas-whatsapp-footer'>";
    //formHtml += "<form action='"+formAction+"' target='"+formTarget+"' class='whatsapp-csaas-form' data-widget='"+widgetId+"' data-channel='"+channel+"'>";
    formHtml += "<div class='csaas-whatsapp-data'>";
    formHtml += "<div class='csaas-whatsapp-field'>";
    formHtml += '<button type="button" class="csaas-wp-emoji-input"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15.5 8C15.8978 8 16.2794 8.15804 16.5607 8.43934C16.842 8.72064 17 9.10218 17 9.5C17 9.89782 16.842 10.2794 16.5607 10.5607C16.2794 10.842 15.8978 11 15.5 11C15.1022 11 14.7206 10.842 14.4393 10.5607C14.158 10.2794 14 9.89782 14 9.5C14 9.10218 14.158 8.72064 14.4393 8.43934C14.7206 8.15804 15.1022 8 15.5 8ZM8.5 8C8.89782 8 9.27936 8.15804 9.56066 8.43934C9.84196 8.72064 10 9.10218 10 9.5C10 9.89782 9.84196 10.2794 9.56066 10.5607C9.27936 10.842 8.89782 11 8.5 11C8.10218 11 7.72064 10.842 7.43934 10.5607C7.15804 10.2794 7 9.89782 7 9.5C7 9.10218 7.15804 8.72064 7.43934 8.43934C7.72064 8.15804 8.10218 8 8.5 8ZM12 17.5C9.67 17.5 7.69 16.04 6.89 14H17.11C16.3 16.04 14.33 17.5 12 17.5Z" fill="#CDD9E2"/> </svg></button>';
    formHtml += "<input name='text' readonly type='text' placeholder='Write your message...' id='csaas_whatsapp_input' class='csass-whatsapp-input' />";
    formHtml += "</div>";
    formHtml += "<div class='csaas-whatsapp-button'>";
    formHtml += "<button type='submit'>";
    formHtml += "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='#ffffff' d='M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z'></path></svg>";
    formHtml += "</button>";
    formHtml += "</div>";
    formHtml += "</div>";
    //formHtml += "</form>";
    formHtml += "</div>";
    formHtml += "</div>";
    formHtml += "</div>";
    jQuery(".chaty-preview").append(formHtml);
    jQuery("#csaas-form-"+widgetId+"-"+channel+" .csaas-whatsapp-message .csaas-whatsapp-message-content").html(jQuery(".chaty-whatsapp-setting-textarea").val());
    var preSetMessage = jQuery(".pre-set-message-whatsapp").val();
    if(!isEmpty(preSetMessage)) {
        var preSetMessage = jQuery(".pre-set-message-whatsapp").val().toHtmlEntities();
        jQuery("#csaas-form-"+widgetId+"-"+channel+" .csass-whatsapp-input").val(preSetMessage);
    }
    if(isEmpty(jQuery(".chaty-whatsapp-setting-textarea").val())) {
        jQuery("#csaas-form-"+widgetId+"-"+channel+" .wp-profile-img").remove();
        jQuery("#csaas-form-"+widgetId+"-"+channel+" .csaas-whatsapp-message").remove();
    }
    jQuery("#chaty-form-"+widgetId+"-"+channel).show();

    jQuery("#csaas_whatsapp_input").attr("placeholder", jQuery(".whatsapp-placeholder").val());

    if(jQuery(".whatsapp-emoji").is(":checked")) {
        jQuery(".csaas-whatsapp-field").addClass("has-emoji");
    } else {
        jQuery(".csaas-whatsapp-field").removeClass("has-emoji");
    }
}

function isEmpty(varVal) {
    if(varVal == null || varVal == "" || jQuery.trim(varVal) == "" ) {
        return true
    }
    return false;
}

function getWidgetPosition() {
    if(jQuery("input[name='cht_position']:checked").val() == "custom") {
        if(jQuery("input[name='positionSide']:checked").val() == "left") {
            return "left";
        }
    } else if(jQuery("input[name='cht_position']:checked").val() == "left") {
        return "left";
    }
    return "right";
}

function getToolTipPosition() {
    var widgetPos = getWidgetPosition();
    if(jQuery("input[name='chaty_icons_view']:checked").val() == "vertical") {
        return (widgetPos == "right")?"left":"right";
    } else if(previewChannelList.length > 1) {
        return "top";
    }
    return (widgetPos == "right")?"left":"right";
}

function getActiveChannels() {
    var channelCount = 0;
    if(jQuery("#channels-selected-list > li:not(.chaty-cls-setting)").length) {
        var isDesktop = jQuery("#previewDesktop").is(":checked")?true:false;
        jQuery("#channels-selected-list > li:not(.csaas-cls-setting)").each(function(){
            if(jQuery(this).hasClass("has-agent-view")) {
                if(isDesktop && jQuery(this).find(".agent-desktop-device").is(":checked")) {
                    previewChannelList.push(jQuery(this).data("id"));
                    channelCount++;
                } else if(!isDesktop && jQuery(this).find(".agent-mobile-device").is(":checked")) {
                    channelCount++;
                    previewChannelList.push(jQuery(this).data("id"));
                }
            } else {
                if(isDesktop && jQuery(this).find(".js-chanel-desktop").is(":checked")) {
                    channelCount++;
                    previewChannelList.push(jQuery(this).data("id"));
                } else if(!isDesktop && jQuery(this).find(".js-chanel-mobile").is(":checked")) {
                    channelCount++;
                    previewChannelList.push(jQuery(this).data("id"));
                }
            }
        });
    }
    return channelCount;
}
