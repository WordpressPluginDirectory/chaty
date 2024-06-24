<?php
/**
 * Contact form leads
 *
 * @author  : Premio <contact@premio.io>
 * @license : GPL2
 * */

if (defined('ABSPATH') === false) {
    exit;
}
?>
<div style="display: none">
    <?php
    $embeddedMessage = "";
    $settings        = [
        'media_buttons'    => false,
        'wpautop'          => false,
        'drag_drop_upload' => false,
        'textarea_name'    => 'chat_editor_channel',
        'textarea_rows'    => 4,
        'quicktags'        => false,
        'tinymce'          => [
            'toolbar1' => 'bold, italic, underline',
            'toolbar2' => '',
            'toolbar3' => '',
        ],
    ];
    wp_editor($embeddedMessage, "chat_editor_channel", $settings);
    ?>
</div>

<section class="section one chaty-setting-form" xmlns="http://www.w3.org/1999/html">
    <?php
    $chtWidgetTitle = get_option("cht_widget_title");
    $chtWidgetTitle = empty($chtWidgetTitle) ? "Widget-1" : $chtWidgetTitle;
    if (isset($_GET['widget_title']) && empty(!$_GET['widget_title'])) {
        $chtWidgetTitle = filter_input(INPUT_GET, 'widget_title');
    }

    ?>
    <div class="chaty-input mb-10">
        <label class="font-primary text-cht-gray-150 text-base block mb-3" for="cht_widget_title"><?php esc_html_e('Name', 'chaty'); ?></label>
        <input class="w-full sm:w-96" id="cht_widget_title" type="text" name="cht_widget_title" value="<?php echo esc_attr($chtWidgetTitle) ?>">
    </div>
    <?php
    // } ?>
    <?php
    $socialApp = get_option('cht_numb_slug');
    $socialApp = trim($socialApp, ",");
    $socialApp = explode(",", $socialApp);
    $socialApp = array_unique($socialApp);
    $imageUrl  = plugin_dir_url("")."chaty/admin/assets/images/chaty-default.png";
    ?>
    <input type="hidden" id="default_image" value="<?php echo esc_url($imageUrl)  ?>" />
    <div class="channels-icons flex max-w-full flex-wrap" id="channel-list">
        <?php if ($this->socials) :
            foreach ($this->socials as $key => $social) :
                $value       = get_option('cht_social'.'_'.$social['slug']);
                $activeClass = '';
                foreach ($socialApp as $keySoc) :
                    if ($keySoc == $social['slug']) {
                        $activeClass = 'active';
                    }
                endforeach;
                $customClass = in_array($social['slug'], array("Link", "Custom_Link", "Custom_Link_3", "Custom_Link_4", "Custom_Link_5", "Custom_Link_6"))?"custom-link":"";
                ?>
                <div class="icon cursor-pointer icon-sm chat-channel-<?php echo esc_attr($social['slug']); ?> <?php echo esc_attr($activeClass) ?> <?php echo esc_attr($customClass) ?>" data-social="<?php echo esc_attr($social['slug']); ?>" data-label="<?php echo esc_attr($social['title']); ?>">
                    <span class="icon-box">
                        <?php echo $social['svg']; ?>
                    </span>
                    <span class="channel-title"><?php echo esc_html($social['title']); ?></span>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
    <div class="custom-channel-button">
        <a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" focusable="false" tabindex="-1"><path d="M15.833 1.75H4.167A2.417 2.417 0 001.75 4.167v11.666a2.417 2.417 0 002.417 2.417h11.666a2.417 2.417 0 002.417-2.417V4.167a2.417 2.417 0 00-2.417-2.417zM10 6.667v6.666" stroke="#83A1B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.667 10h6.666" stroke="#83A1B7" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <?php esc_html_e('Custom Channel', 'chaty'); ?>
        </a>
    </div>

    <input type="hidden" class="add_slug" name="cht_numb_slug" placeholder="test" value="<?php echo esc_attr(get_option('cht_numb_slug')); ?>" id="cht_numb_slug" >

    <div class="channels-selected mt-4" id="channels-selected-list">
        <div class="channel-empty-state relative <?php echo esc_attr(count($this->socials) == 0?"active":"") ?>"">
            <img class="-left-3 sm:-left-5 md:-left-8 relative" src="<?php echo esc_url(CHT_PLUGIN_URL."admin/assets/images/empty-state-star.png") ?>"/>
            <p class="absolute top-4 left-0 text-base text-cht-gray-150 w-52 text-center opacity-60"><?php esc_html_e('So many channels to choose from...', 'chaty'); ?></p>
        </div>
        <ul id="channels-selected-list" class="channels-selected-list channels-selected">
            <?php if ($this->socials) {
                $social = get_option('cht_numb_slug');
                $social = explode(",", $social);
                $social = array_unique($social);
                foreach ($social as $keySoc) {
                    foreach ($this->socials as $key => $social) {
                        if ($social['slug'] != $keySoc) {
                            // compare social media slug
                            continue;
                        }

                        include "channel.php";
                        ?>
                    <?php } ?>
                <?php } ?>
            <?php }; ?>
            <?php
            $proClass = "free";
            $text     = get_option("cht_close_button_text");
            $text     = wp_strip_all_tags(($text === false) ? "Hide" : $text);
            ?>
            <!-- close setting strat -->
            <li class="chaty-cls-setting" data-id="" id="chaty-social-close">
                <div class="channels-selected__item pro 1 available flex items-start space-x-3 ml-4">
                    <div class="chaty-default-settings">
                        <div class="move-icon hidden">
                            <img src="<?php echo esc_url(CHT_PLUGIN_URL."admin/assets/images/move-icon.png") ?>" style="opacity:0"; />
                        </div>
                        <div class="icon icon-md active" data-label="close">
                            <span id="image_data_close">
                                <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="26" cy="26" rx="26" ry="26" fill="#A886CD"></ellipse><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="white"></rect><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="white"></rect></svg>
                            </span>
                            <span class="default_image_close" style="display: none;">
                                 <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="26" cy="26" rx="26" ry="26" fill="#A886CD"></ellipse><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="white"></rect><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="white"></rect></svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="channels__input-box cls-btn-settings active">
                            <input type="text" class="channels__input close-button-text" name="cht_close_button_text" value="<?php echo esc_attr((wp_unslash($text))) ?>" >
                        </div>
                        <div class="input-example cls-btn-settings active font-primary text-cht-gray-150 text-base mt-1">
                            <?php esc_html_e('On hover Close button text', 'chaty'); ?>
                        </div>
                    </div>
                </div>
            </li>
            <!-- close setting end -->
        </ul>

        <div class="channels-selected__item disabled" style="opacity: 0; display: none;"></div>

        <input type="hidden" id="is_pro_plugin" value="0" />
    </div>
    <?php
    $plugin            = 'chatway-live-chat/chatway.php';
    $installed_plugins = get_plugins();
    if (!is_plugin_active($plugin)) { ?>
        <hr>
        <div class="chatway-info-box">
            <div class="chatway-info-title">
                <?php esc_html_e("Offer real-time assistance to your visitors through Live Chat!", "chaty"); ?>
            </div>
            <div class="chatway-info-desc">
                <?php esc_html_e("With our easy-to-use widget, you and your team can offer live chat support and take your customer experience to the next level.", "chaty"); ?>
            </div>
            <div class="chatway-info-btn">
                <a class="btn rounded-lg font-normal text-base border-gray-400 text-cht-gray-150 hover:bg-cht-gray-150/10 hover:text-cht-gray-150 brd-cht-blue" href="javascript:;" id="add_chatyway_icon">
                    <div class="add-chatyway-icon">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.3669 22.7088L9.00454 19.846L10.1913 21.7048C10.1913 21.7048 9.43739 21.5705 8.75067 21.8989C8.06394 22.2273 7.3669 22.7088 7.3669 22.7088Z" fill="#0038A5"/> <path d="M6.19341 21.3436C6.06426 21.0492 5.7976 20.838 5.48147 20.7796L1.5873 20.0607C0.667542 19.8909 0 19.0888 0 18.1535V6.53587C0 5.1056 0.700916 3.76613 1.87601 2.95076L4.38973 1.20654C5.38282 0.51746 6.60698 0.246366 7.79816 0.45174L16.7802 2.00038C18.6407 2.32115 20 3.93485 20 5.82277V14.6237C20 15.6655 19.5809 16.6635 18.8372 17.3929L15.6382 20.5304C14.4251 21.7201 12.6985 22.2263 11.0351 21.8797L9.17661 21.4925C8.84529 21.4235 8.50196 21.5322 8.27074 21.7794L7.48924 22.6146C7.25139 22.8688 6.83107 22.797 6.6912 22.4782L6.19341 21.3436Z" fill="#0446DE"/> <path d="M4.26402 4.35337C2.31122 3.95655 0.484924 5.44905 0.484924 7.44177V17.3662C0.484924 18.3011 1.15191 19.1029 2.07118 19.2731L5.92902 19.9875C6.25151 20.0473 6.52196 20.2659 6.64786 20.5688L6.99399 21.4014C7.09887 21.6537 7.4341 21.7045 7.60906 21.4947L8.27676 20.6939C8.47749 20.4531 8.78223 20.3242 9.0948 20.3479L12.1623 20.5803C13.71 20.6975 15.0304 19.4734 15.0304 17.9212V8.1261C15.0304 7.20387 14.3809 6.4092 13.4772 6.22555L4.26402 4.35337Z" fill="#0038A5"/> <path d="M4.05471 4.34379C2.85779 4.11167 1.74609 5.02849 1.74609 6.24771V16.4524C1.74609 17.4163 2.45394 18.2339 3.40788 18.3718L6.05423 18.7546C6.37641 18.8012 6.6537 19.0063 6.79253 19.3008L7.1644 20.0895C7.26724 20.3423 7.60161 20.396 7.77835 20.188L8.3385 19.538C8.55472 19.2871 8.88406 19.1639 9.21187 19.2113L12.8133 19.7322C13.9827 19.9013 15.0303 18.9943 15.0303 17.8128V8.0717C15.0303 7.14297 14.3719 6.3446 13.4601 6.16778L4.05471 4.34379Z" fill="white"/> <path d="M10.9095 14.5922L5.31137 13.6108C4.90406 13.5394 4.57266 13.8652 4.73023 14.2475C5.24204 15.4894 6.67158 17.4418 9.20419 16.7908C9.72572 16.6567 10.9053 15.9787 11.2377 15.0756C11.3207 14.85 11.1463 14.6337 10.9095 14.5922Z" fill="#0446DE"/> <ellipse cx="5.50291" cy="9.96605" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 5.50291 9.96605)" fill="#0446DE"/> <ellipse cx="10.7489" cy="10.935" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 10.7489 10.935)" fill="#0446DE"/> </svg>
                    </div>
                    <?php esc_html_e('Add a Live Chat Widget', 'chaty'); ?>
                </a>
            </div>
        </div>
    <?php } ?>
</section>

<div class="chaty-popup" id="chatyway-info-popup">
    <div class="chaty-popup-outer"></div>
    <div class="chaty-popup-inner popup-pos-bottom">
        <div class="chaty-popup-content">
            <div class="chaty-popup-close">
                <a href="javascript:void(0)" class="close-delete-pop close-chaty-popup-btn right-2 top-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.6 15.5c-.53.53-1.38.53-1.91 0L8.05 9.87 2.31 15.6c-.53.53-1.38.53-1.91 0s-.53-1.38 0-1.9l5.65-5.64L.4 2.4C-.13 1.87-.13 1.02.4.49s1.38-.53 1.91 0l5.64 5.63L13.69.39c.53-.53 1.38-.53 1.91 0s.53 1.38 0 1.91L9.94 7.94l5.66 5.65c.52.53.52 1.38 0 1.91z"></path></svg>
                </a>
            </div>
            <div class="a-card a-card--normal chatyway-popup-box">
                <div class="chatyway-popup-box-logo">
                    <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.3703 53.8181L22.2475 47.0403L25.0573 51.4411C25.0573 51.4411 23.2724 51.1231 21.6465 51.9007C20.0206 52.6782 18.3703 53.8181 18.3703 53.8181Z" fill="#0038A5"/> <path d="M15.592 50.5859C15.2862 49.889 14.6549 49.3888 13.9064 49.2507L4.68665 47.5485C2.50905 47.1465 0.928589 45.2476 0.928589 43.0332V15.5275C0.928589 12.1413 2.58806 8.96996 5.37018 7.03951L11.3216 2.90995C13.6728 1.27849 16.5711 0.636658 19.3913 1.1229L40.6571 4.78941C45.0619 5.54886 48.2801 9.36944 48.2801 13.8392V34.6762C48.2801 37.1426 47.288 39.5054 45.5271 41.2325L37.9531 48.6608C35.0812 51.4775 30.9933 52.6758 27.0551 51.8554L22.6549 50.9386C21.8705 50.7752 21.0576 51.0326 20.5102 51.6177L18.6599 53.5952C18.0968 54.1971 17.1017 54.027 16.7705 53.2722L15.592 50.5859Z" fill="#0446DE"/> <path d="M11.024 10.3603C6.40055 9.42079 2.07666 12.9544 2.07666 17.6723V41.1691C2.07666 43.3825 3.65579 45.2809 5.83223 45.684L14.966 47.3754C15.7295 47.5168 16.3698 48.0345 16.6679 48.7516L17.4874 50.7229C17.7357 51.3202 18.5294 51.4405 18.9436 50.9437L20.5244 49.0476C20.9997 48.4776 21.7212 48.1725 22.4612 48.2285L29.7237 48.7787C33.388 49.0563 36.5141 46.158 36.5141 42.4832V19.2925C36.5141 17.1091 34.9766 15.2276 32.8368 14.7928L11.024 10.3603Z" fill="#0038A5"/> <path d="M10.5283 10.3377C7.69452 9.7881 5.0625 11.9587 5.0625 14.8453V39.0058C5.0625 41.2878 6.73839 43.2235 8.9969 43.5501L15.2624 44.4563C16.0251 44.5667 16.6816 45.0523 17.0103 45.7494L17.8908 47.6169C18.1343 48.2155 18.9259 48.3424 19.3443 47.85L20.6705 46.3111C21.1825 45.717 21.9622 45.4254 22.7383 45.5376L31.265 46.7708C34.0336 47.1713 36.5139 45.0239 36.5139 42.2265V19.1638C36.5139 16.9649 34.955 15.0747 32.7964 14.6561L10.5283 10.3377Z" fill="white"/> <path d="M26.7578 34.6015L13.5037 32.2779C12.5393 32.1088 11.7547 32.8803 12.1278 33.7855C13.3395 36.7258 16.7241 41.3481 22.7202 39.8068C23.955 39.4895 26.7478 37.8841 27.5347 35.7461C27.7313 35.2119 27.3184 34.6998 26.7578 34.6015Z" fill="#0446DE"/> <ellipse cx="13.9572" cy="23.6487" rx="2.34998" ry="4.02854" transform="rotate(-4.90348 13.9572 23.6487)" fill="#0446DE"/> <ellipse cx="26.3774" cy="25.9428" rx="2.34998" ry="4.02854" transform="rotate(-4.90348 26.3774 25.9428)" fill="#0446DE"/> </svg>
                </div>
                <div class="chatyway-popup-box-title">
                    <?php esc_html_e("Connect effortlessly with customers through Live Chat!", "chaty"); ?>
                </div>
                <div class="chatyway-popup-box-desc">
                    <?php esc_html_e("Supercharge your customer experience with our user-friendly live-chat widget, allowing you and your team to provide live chat support effortlessly.", "chaty"); ?>
                </div>
                <div class="chatyway-popup-box-img">
                    <img src="<?php echo esc_url(CHT_PLUGIN_URL.'admin/assets/images/chatyway-app.png'); ?>" alt="chatyway">
                </div>
                <div class="chatyway-popup-box-btn">
                    <a href="<?php echo self_admin_url("plugin-install.php?s=chatway&tab=search&type=author") ?>" target="_blank" class="add-live-chat-btn">
                        <?php esc_html_e("Add Live Chat", "chaty") ?>
                        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 9.5L5 5.5L1 1.5" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    var PRO_PLUGIN_URL = "<?php echo esc_url(CHT_PRO_URL) ?>";

    jQuery(document).on("click", "#add_chatyway_icon", function (){
        jQuery("#chatyway-info-popup").show();
    });

    jQuery(".add-live-chat-btn").on("click", function (){
        jQuery("#chatyway-info-popup").hide();
    });
</script>

