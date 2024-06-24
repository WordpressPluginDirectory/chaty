<?php
/**
 * Chaty Popups for widget and contact form lead
 *
 * @author  : Premio <contact@premio.io>
 * @license : GPL2
 * */

if (defined('ABSPATH') === false) {
    exit;
}

$chatyWidgets = [];
$widget       = "";
$dateStatus   = false;
$isDeleted    = get_option("cht_is_default_deleted");
if ($isDeleted === false) {
    $chtWidgetTitle = get_option("cht_widget_title");
    $chtWidgetTitle = empty($chtWidgetTitle) ? "Widget-1" : $chtWidgetTitle;
    $status         = get_option("cht_active");
    $date           = get_option("cht_created_on");
    $dateStatus     = ($date === false || empty($date)) ? 0 : 1;
    $widget         = [
        'title'      => $chtWidgetTitle,
        'index'      => 0,
        'nonce'      => wp_create_nonce("chaty_remove__0"),
        'status'     => $status,
        'created_on' => $date,
    ];
    $chatyWidgets[] = $widget;
}

$status    = get_option("cht_active");
$widgetURL = admin_url("admin.php?page=chaty-upgrade");
if ($status === false) {
    $chatyWidgets = [];
    $widgetURL    = admin_url("admin.php?page=chaty-app&widget=0");
}

$plugin            = 'chatway-live-chat/chatway.php';
$installed_plugins = get_plugins();
?>
<div class="wrap">
    <div class="container" dir="ltr">
        <?php settings_errors(); ?>
        
        <header class="flex py-2 flex-col items-start sm:flex-row sm:justify-between">
            <a href="<?php echo esc_url( $this->getDashboardUrl() ) ?>">
                <img src="<?php echo esc_url(CHT_PLUGIN_URL.'admin/assets/images/logo-color.svg'); ?>" alt="Chaty" class="logo">   
            </a>
            <div class="flex items-center mt-8 sm:mt-0 space-x-3">
                <?php if (!is_plugin_active($plugin)) { ?>
                    <a class="btn rounded-lg font-normal text-base bg-gray-100 border-gray-400 text-cht-gray-150 hover:bg-cht-gray-150/10 hover:text-cht-gray-150 brd-cht-blue" href="javascript:;" id="add_chatyway_icon">
                        <div class="add-chatyway-icon">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.3669 22.7088L9.00454 19.846L10.1913 21.7048C10.1913 21.7048 9.43739 21.5705 8.75067 21.8989C8.06394 22.2273 7.3669 22.7088 7.3669 22.7088Z" fill="#0038A5"/> <path d="M6.19341 21.3436C6.06426 21.0492 5.7976 20.838 5.48147 20.7796L1.5873 20.0607C0.667542 19.8909 0 19.0888 0 18.1535V6.53587C0 5.1056 0.700916 3.76613 1.87601 2.95076L4.38973 1.20654C5.38282 0.51746 6.60698 0.246366 7.79816 0.45174L16.7802 2.00038C18.6407 2.32115 20 3.93485 20 5.82277V14.6237C20 15.6655 19.5809 16.6635 18.8372 17.3929L15.6382 20.5304C14.4251 21.7201 12.6985 22.2263 11.0351 21.8797L9.17661 21.4925C8.84529 21.4235 8.50196 21.5322 8.27074 21.7794L7.48924 22.6146C7.25139 22.8688 6.83107 22.797 6.6912 22.4782L6.19341 21.3436Z" fill="#0446DE"/> <path d="M4.26402 4.35337C2.31122 3.95655 0.484924 5.44905 0.484924 7.44177V17.3662C0.484924 18.3011 1.15191 19.1029 2.07118 19.2731L5.92902 19.9875C6.25151 20.0473 6.52196 20.2659 6.64786 20.5688L6.99399 21.4014C7.09887 21.6537 7.4341 21.7045 7.60906 21.4947L8.27676 20.6939C8.47749 20.4531 8.78223 20.3242 9.0948 20.3479L12.1623 20.5803C13.71 20.6975 15.0304 19.4734 15.0304 17.9212V8.1261C15.0304 7.20387 14.3809 6.4092 13.4772 6.22555L4.26402 4.35337Z" fill="#0038A5"/> <path d="M4.05471 4.34379C2.85779 4.11167 1.74609 5.02849 1.74609 6.24771V16.4524C1.74609 17.4163 2.45394 18.2339 3.40788 18.3718L6.05423 18.7546C6.37641 18.8012 6.6537 19.0063 6.79253 19.3008L7.1644 20.0895C7.26724 20.3423 7.60161 20.396 7.77835 20.188L8.3385 19.538C8.55472 19.2871 8.88406 19.1639 9.21187 19.2113L12.8133 19.7322C13.9827 19.9013 15.0303 18.9943 15.0303 17.8128V8.0717C15.0303 7.14297 14.3719 6.3446 13.4601 6.16778L4.05471 4.34379Z" fill="white"/> <path d="M10.9095 14.5922L5.31137 13.6108C4.90406 13.5394 4.57266 13.8652 4.73023 14.2475C5.24204 15.4894 6.67158 17.4418 9.20419 16.7908C9.72572 16.6567 10.9053 15.9787 11.2377 15.0756C11.3207 14.85 11.1463 14.6337 10.9095 14.5922Z" fill="#0446DE"/> <ellipse cx="5.50291" cy="9.96605" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 5.50291 9.96605)" fill="#0446DE"/> <ellipse cx="10.7489" cy="10.935" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 10.7489 10.935)" fill="#0446DE"/> </svg>
                        </div>
                        <?php esc_html_e('Add a Live Chat Widget', 'chaty'); ?>
                    </a>
                <?php } else { ?>
                    <a class="btn rounded-lg font-normal text-base bg-gray-100 border-gray-400 text-cht-gray-150 hover:bg-cht-gray-150/10 hover:text-cht-gray-150 brd-cht-blue" href="<?php echo admin_url("admin.php?page=chatway"); ?>" target="_blank">
                        <div class="add-chatyway-icon">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.3669 22.7088L9.00454 19.846L10.1913 21.7048C10.1913 21.7048 9.43739 21.5705 8.75067 21.8989C8.06394 22.2273 7.3669 22.7088 7.3669 22.7088Z" fill="#0038A5"/> <path d="M6.19341 21.3436C6.06426 21.0492 5.7976 20.838 5.48147 20.7796L1.5873 20.0607C0.667542 19.8909 0 19.0888 0 18.1535V6.53587C0 5.1056 0.700916 3.76613 1.87601 2.95076L4.38973 1.20654C5.38282 0.51746 6.60698 0.246366 7.79816 0.45174L16.7802 2.00038C18.6407 2.32115 20 3.93485 20 5.82277V14.6237C20 15.6655 19.5809 16.6635 18.8372 17.3929L15.6382 20.5304C14.4251 21.7201 12.6985 22.2263 11.0351 21.8797L9.17661 21.4925C8.84529 21.4235 8.50196 21.5322 8.27074 21.7794L7.48924 22.6146C7.25139 22.8688 6.83107 22.797 6.6912 22.4782L6.19341 21.3436Z" fill="#0446DE"/> <path d="M4.26402 4.35337C2.31122 3.95655 0.484924 5.44905 0.484924 7.44177V17.3662C0.484924 18.3011 1.15191 19.1029 2.07118 19.2731L5.92902 19.9875C6.25151 20.0473 6.52196 20.2659 6.64786 20.5688L6.99399 21.4014C7.09887 21.6537 7.4341 21.7045 7.60906 21.4947L8.27676 20.6939C8.47749 20.4531 8.78223 20.3242 9.0948 20.3479L12.1623 20.5803C13.71 20.6975 15.0304 19.4734 15.0304 17.9212V8.1261C15.0304 7.20387 14.3809 6.4092 13.4772 6.22555L4.26402 4.35337Z" fill="#0038A5"/> <path d="M4.05471 4.34379C2.85779 4.11167 1.74609 5.02849 1.74609 6.24771V16.4524C1.74609 17.4163 2.45394 18.2339 3.40788 18.3718L6.05423 18.7546C6.37641 18.8012 6.6537 19.0063 6.79253 19.3008L7.1644 20.0895C7.26724 20.3423 7.60161 20.396 7.77835 20.188L8.3385 19.538C8.55472 19.2871 8.88406 19.1639 9.21187 19.2113L12.8133 19.7322C13.9827 19.9013 15.0303 18.9943 15.0303 17.8128V8.0717C15.0303 7.14297 14.3719 6.3446 13.4601 6.16778L4.05471 4.34379Z" fill="white"/> <path d="M10.9095 14.5922L5.31137 13.6108C4.90406 13.5394 4.57266 13.8652 4.73023 14.2475C5.24204 15.4894 6.67158 17.4418 9.20419 16.7908C9.72572 16.6567 10.9053 15.9787 11.2377 15.0756C11.3207 14.85 11.1463 14.6337 10.9095 14.5922Z" fill="#0446DE"/> <ellipse cx="5.50291" cy="9.96605" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 5.50291 9.96605)" fill="#0446DE"/> <ellipse cx="10.7489" cy="10.935" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 10.7489 10.935)" fill="#0446DE"/> </svg>
                        </div>
                        <?php esc_html_e('Manage Live Chat Widget', 'chaty'); ?>
                    </a>
                <?php } ?>
                <a class="btn rounded-lg font-normal text-base bg-gray-100 border-gray-400 text-cht-gray-150 hover:bg-cht-gray-150/10 hover:text-cht-gray-150" href="<?php echo esc_url($widgetURL) ?>">
                    <?php esc_html_e('Create New Widget', 'chaty'); ?>
                </a>
                <a class="text-base text-cht-primary border border-solid border-cht-primary rounded-lg px-3 sm:px-5 py-1.5 sm:py-2.5 transition duration-200 ease-linear hover:text-cht-primary hover:bg-cht-primary/10  inline-block font-normal" href="<?php echo esc_url($this->getUpgradeMenuItemUrl()); ?>">
                    <?php esc_html_e('Upgrade Now', 'chaty'); ?>
                </a>
            </div>
        </header>

        <div class="chaty-table">
            <?php if (count($chatyWidgets)) { ?>
                <div class="responsive-table dashboard">
                    <table class="border-separate w-full rounded-lg border border-cht-gray-50"  cellspacing="0" >
                        <thead>
                            <tr>
                                <th class="w-28 rounded-tl-lg text-cht-gray-150 text-sm font-semibold font-primary py-3 px-2 bg-cht-primary-50"><?php esc_html_e("Status", 'chaty'); ?></th>
                                <th class="text-left text-cht-gray-150 text-sm font-semibold font-primary py-3 px-5 bg-cht-primary-50"><?php esc_html_e("Widget name", 'chaty'); ?></th>
                                <?php if ($dateStatus) { ?>
                                    <th class="text-left text-cht-gray-150 text-sm font-semibold font-primary py-3 px-5 bg-cht-primary-50"><?php esc_html_e("Created On", 'chaty'); ?></th>
                                <?php } ?>
                                <th class="w-36 rounded-tr-lg text-cht-gray-150 text-sm font-semibold font-primary py-3 px-2 bg-cht-primary-50"><?php esc_html_e("Actions", 'chaty'); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($chatyWidgets as $widget) { ?>
                                <tr id="widget_<?php echo esc_attr($widget['index']) ?>" data-widget="<?php echo esc_attr($widget['index']) ?>" data-nonce="<?php echo esc_attr($widget['nonce']) ?>">
                                    <td class="bg-white py-3.5 px-5 text-cht-gray-150 font-primary text-sm text-center">
                                        <label class="chaty-switch" for="trigger_on_time<?php echo esc_attr($widget['index']) ?>">
                                            <input type="checkbox" class="change-chaty-status" name="chaty_trigger_on_time" id="trigger_on_time<?php echo esc_attr($widget['index']) ?>" value="yes" <?php checked($widget['status'], 1) ?>>
                                            <div class="chaty-slider round"></div>
                                        </label>
                                    </td>
                                    <td class="border-t bg-white border-x py-3.5 text-cht-gray-150 font-primary text-sm text-left px-5 border-cht-gray-50 widget-title" data-title="<?php esc_html_e("Widget name", 'chaty'); ?>"><?php echo esc_attr($widget['title']) ?></td>
                                    <?php if ($dateStatus) { ?>
                                        <?php if (!empty($widget['created_on'])) {?>
                                            <td class="border-t bg-white py-3.5 text-cht-gray-150 font-primary text-sm text-left px-5 border-r border-cht-gray-50" data-title="<?php esc_html_e("Created On", 'chaty'); ?>"><?php echo esc_attr(gmdate("F j, Y", strtotime($widget['created_on']))) ?></td>
                                        <?php } else { ?>
                                            <td class="border-t bg-white py-3.5 text-cht-gray-150 font-primary text-sm text-left px-5 border-r border-cht-gray-50" data-title="<?php esc_html_e("Created On", 'chaty'); ?>">&nbsp;</td>
                                        <?php } ?>
                                    <?php } ?>
                                    <td class="bg-white py-3.5 px-5">
                                        <div class="font-primary text-cht-gray-150 relative">
                                            <div class="flex items-stretch justify-center">
                                                <a class="border-l text-center text-xs border-t leading-5 border-b border-cht-gray-150/30 px-2.5 py-1 rounded-tl-md rounded-bl-md inline-block duration-200 ease-linear hover:bg-cht-gray-150/10 focus:text-cht-gray-150"
                                                    href="<?php echo esc_url(admin_url("admin.php?page=chaty-app&widget=".esc_attr($widget['index']))) ?>">
                                                    <?php esc_html_e("Edit", "chaty") ?>
                                                </a>
                                                <span class="action-dropdown-btn border border-cht-gray-150/30 rounded-tr-md rounded-br-md px-1 inline-block cursor-pointer duration-200 ease-linear hover:bg-cht-gray-150/10">
                                                    <svg class="pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" svg-inline="" focusable="false" tabindex="-1">
                                                        <path d="M8 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM8 4a.667.667 0 100-1.333A.667.667 0 008 4zM8 13.333A.667.667 0 108 12a.667.667 0 000 1.333z" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="action-dropdown z-10 hidden absolute top-full mt-1 right-4 bg-white p-3 rounded-lg simple-shadow border border-cht-gray-150/10">
                                                <a class="clone-widget flex items-center text-base rounded-lg py-2 px-3 w-36 hover:bg-cht-primary/10 hover:text-cht-gray-150 space-x-2" href="javascript:;">
                                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" focusable="false" tabindex="-1">
                                                        <path d="M13.333 6h-6C6.597 6 6 6.597 6 7.333v6c0 .737.597 1.334 1.333 1.334h6c.737 0 1.334-.597 1.334-1.334v-6c0-.736-.597-1.333-1.334-1.333z" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.333 10h-.666a1.333 1.333 0 01-1.334-1.333v-6a1.333 1.333 0 011.334-1.334h6A1.333 1.333 0 0110 2.667v.666" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <span><?php esc_html_e("Duplicate", "chaty") ?></span>
                                                </a>
                                                <a class="rename-widget text-base rounded-lg py-2 px-3 flex items-center w-36 hover:bg-cht-primary/10 hover:text-cht-gray-150 space-x-2" href="javascript:;">
                                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" focusable="false" tabindex="-1"><path d="M14.166 2.5A2.357 2.357 0 0117.5 5.833L6.25 17.083l-4.583 1.25 1.25-4.583L14.166 2.5z" stroke="#83A1B7" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    <span><?php esc_html_e("Rename", "chaty") ?></span>
                                                </a>
                                                <?php if (!is_plugin_active($plugin)) { ?>
                                                <a class="text-base rounded-lg py-2 px-3 flex items-center w-36 hover:bg-cht-primary/10 hover:text-cht-gray-150 space-x-2" href="javascript:;" id="add_chatyway_icon">
                                                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.36696 22.7088L9.0046 19.846L10.1913 21.7048C10.1913 21.7048 9.43745 21.5705 8.75073 21.8989C8.064 22.2273 7.36696 22.7088 7.36696 22.7088Z" fill="#648AA5"/> <path d="M6.19341 21.3436C6.06426 21.0492 5.7976 20.838 5.48147 20.7796L1.5873 20.0607C0.667542 19.8909 0 19.0888 0 18.1535V6.53587C0 5.1056 0.700916 3.76613 1.87601 2.95076L4.38973 1.20654C5.38282 0.51746 6.60698 0.246366 7.79816 0.45174L16.7802 2.00038C18.6407 2.32115 20 3.93485 20 5.82277V14.6237C20 15.6655 19.5809 16.6635 18.8372 17.3929L15.6382 20.5304C14.4251 21.7202 12.6985 22.2263 11.0351 21.8797L9.17661 21.4925C8.84529 21.4235 8.50196 21.5322 8.27074 21.7794L7.48924 22.6146C7.25139 22.8688 6.83107 22.797 6.6912 22.4782L6.19341 21.3436Z" fill="#83A1B7"/> <path d="M4.26396 4.35337C2.31115 3.95655 0.484863 5.44905 0.484863 7.44177V17.3662C0.484863 18.3011 1.15184 19.1029 2.07111 19.2731L5.92896 19.9875C6.25145 20.0473 6.5219 20.2659 6.6478 20.5688L6.99393 21.4014C7.09881 21.6537 7.43404 21.7045 7.609 21.4947L8.2767 20.6939C8.47743 20.4531 8.78217 20.3242 9.09474 20.3479L12.1622 20.5803C13.7099 20.6975 15.0303 19.4734 15.0303 17.9212V8.1261C15.0303 7.20387 14.3809 6.4092 13.4771 6.22555L4.26396 4.35337Z" fill="#648AA5"/> <path d="M4.05471 4.34379C2.85779 4.11167 1.74609 5.02849 1.74609 6.24771V16.4524C1.74609 17.4163 2.45394 18.2339 3.40788 18.3718L6.05423 18.7546C6.37641 18.8012 6.6537 19.0063 6.79253 19.3008L7.1644 20.0895C7.26724 20.3423 7.60161 20.396 7.77835 20.188L8.3385 19.538C8.55472 19.2871 8.88406 19.1639 9.21187 19.2113L12.8133 19.7322C13.9827 19.9013 15.0303 18.9943 15.0303 17.8128V8.0717C15.0303 7.14297 14.3719 6.3446 13.4601 6.16778L4.05471 4.34379Z" fill="white"/> <path d="M10.9095 14.5922L5.31137 13.6108C4.90406 13.5394 4.57266 13.8652 4.73023 14.2475C5.24204 15.4894 6.67158 17.4418 9.20419 16.7908C9.72572 16.6567 10.9053 15.9787 11.2377 15.0756C11.3207 14.85 11.1463 14.6337 10.9095 14.5922Z" fill="#83A1B7"/> <ellipse cx="5.50291" cy="9.96605" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 5.50291 9.96605)" fill="#83A1B7"/> <ellipse cx="10.7489" cy="10.935" rx="0.992567" ry="1.70154" transform="rotate(-4.90348 10.7489 10.935)" fill="#83A1B7"/> </svg>
                                                    <span><?php esc_html_e("Add Live Chat", "chaty") ?></span>
                                                </a>
                                                <?php } ?>
                                                <hr class="border border-cht-gray-150/10 my-1" />
                                                <a class="remove-widget text-base rounded-lg py-2 px-3 flex items-center w-36 hover:bg-cht-primary/10 hover:text-cht-gray-150 space-x-2" href="javascript:;">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" focusable="false" tabindex="-1"><path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.334 1.334 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334z" stroke="#ff424d" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    <span class="text-cht-red "><?php esc_html_e("Delete", "chaty") ?></span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            <?php }//end foreach
                            ?>
                        </tbody>
                    </table>



                    <div class="dashboard-pro-box">
                        <div class="dashboard-pro-title">
                            <?php esc_html_e("Gain access to more premium features", "chaty"); ?>
                            <a href="#" class="close-dashboard-pro-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 8L8 24" stroke="#374151" stroke-width="3.33" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8L24 24" stroke="#374151" stroke-width="3.33" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <div class="dashboard-pro-body">
                            <div class="dashboard-pro-body-left">
                                <ul>
                                    <li><?php esc_html_e("📱 Create multiple widgets for different devices, pages and languages.", "chaty"); ?></li>
                                    <li><?php esc_html_e("💬 Show multiple agents under a single channel.", "chaty"); ?></li>
                                    <li><?php esc_html_e("📈 Unlock analytics about each channel usage and different widgets", "chaty"); ?></li>
                                    <li><?php esc_html_e("🎨 Customise the widget to display the chat view popup.", "chaty"); ?></li>
                                </ul>
                                <a class="dashboard-pro-button" href="<?php echo esc_url($this->getUpgradeMenuItemUrl()); ?>"><?php esc_html_e("Upgrade to Pro today", "chaty"); ?></a>
                            </div>
                            <div class="dashboard-pro-body-right">
                                <img src="<?php echo esc_url(CHT_PLUGIN_URL) ?>/admin/assets/images/dashboard.png" alt="chaty">
                            </div>
                        </div>
                    </div>
                </div>
            <?php } else { ?>
                <div class="chaty-table no-widgets py-20 bg-cover rounded-lg border border-cht-gray-50">
                    <img class="mx-auto w-60" src="<?php echo esc_url(CHT_PLUGIN_URL) ?>/admin/assets/images/stars-image.png" />
                    <p class="font-primary text-base text-cht-gray-150 -mt-2 max-w-screen-sm px-5 mx-auto"><?php esc_html_e("Create widgets for WhatsApp, Facebook Messenger, Telegram & 20+ more channels. Adding a new Chaty widget takes a minute - start now  🚀", "chaty") ?></p>
                    <div class="flex items-center space-x-3 mt-5 justify-center">
                       <a class="btn rounded-lg drop-shadow-3xl" href="<?php echo esc_url(admin_url("admin.php?page=chaty-app&widget=0")) ?>"><?php esc_html_e("Create Widget", "chaty") ?></a>
                    </div>
                </div>
            <?php }//end if
            ?>
        </div>

    </div>
</div>

<div class="chaty-popup" id="clone-widget">
    <div class="chaty-popup-outer"></div>
    <div class="chaty-popup-inner popup-pos-bottom">
        <div class="chaty-popup-content">
            <div class="chaty-popup-close">
                <a href="javascript:void(0)" class="close-delete-pop close-chaty-popup-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.6 15.5c-.53.53-1.38.53-1.91 0L8.05 9.87 2.31 15.6c-.53.53-1.38.53-1.91 0s-.53-1.38 0-1.9l5.65-5.64L.4 2.4C-.13 1.87-.13 1.02.4.49s1.38-.53 1.91 0l5.64 5.63L13.69.39c.53-.53 1.38-.53 1.91 0s.53 1.38 0 1.91L9.94 7.94l5.66 5.65c.52.53.52 1.38 0 1.91z"></path></svg>
                </a>
            </div>
            <form class="" action="<?php echo esc_url(admin_url("admin.php?page=chaty-widget-settings")) ?>" method="get">
                <div class="a-card a-card--normal">
                    <div class="chaty-popup-header font-medium">
                        <?php esc_html_e("Duplicate Widget?", "chaty") ?>
                    </div>
                    <div class="chaty-popup-body">
                        <?php esc_html_e("Please select a name for your new duplicate widget", "chaty") ?>
                        <div class="chaty-popup-input">
                            <input type="text" name="widget_title" id="widget_title">
                            <input type="hidden" name="copy-from" id="widget_clone_id">
                            <input type="hidden" name="page" value="chaty-widget-settings">
                        </div>
                    </div>
                    <input type="hidden" id="delete_widget_id" value="">
                    <div class="chaty-popup-footer">
                        <button type="submit" class="btn btn-primary"><?php esc_html_e("Create Widget", "chaty") ?></button>
                        <button type="button" class="btn btn-default close-chaty-popup-btn"><?php esc_html_e("Cancel", "chaty") ?></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="chaty-popup" id="rename-widget">
    <div class="chaty-popup-outer"></div>
    <div class="chaty-popup-inner popup-pos-bottom">
        <div class="chaty-popup-content">
            <div class="chaty-popup-close">
                <a href="javascript:void(0)" class="close-delete-pop close-chaty-popup-btn right-2 top-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.6 15.5c-.53.53-1.38.53-1.91 0L8.05 9.87 2.31 15.6c-.53.53-1.38.53-1.91 0s-.53-1.38 0-1.9l5.65-5.64L.4 2.4C-.13 1.87-.13 1.02.4.49s1.38-.53 1.91 0l5.64 5.63L13.69.39c.53-.53 1.38-.53 1.91 0s.53 1.38 0 1.91L9.94 7.94l5.66 5.65c.52.53.52 1.38 0 1.91z"></path></svg>
                </a>
            </div>
            <form class="" action="<?php echo esc_url(admin_url("admin.php?page=chaty-widget-settings")) ?>" method="get" id="rename-widget-form">
                <div class="a-card a-card--normal">
                    <div class="chaty-popup-header  text-left font-primary text-cht-gray-150 font-medium py-3 px-3 sm:p-5 relative">
                        <?php esc_html_e("Rename Widget", "chaty") ?>
                    </div>
                    <div class="chaty-popup-body px-4 py-4 sm:px-8 sm:py-5">
                        <p class=" text-base font-primary text-cht-gray-150">
                            <?php esc_html_e("Enter new name for widget", "chaty") ?>
                        </p>
                        <div class="chaty-popup-input">
                            <input type="text" name="widget_title" id="widget_new_title">
                            <input type="hidden" name="widget_id" id="widget_rename_id">
                            <input type="hidden" name="page" value="chaty-widget-settings">
                        </div>
                    </div>
                    <input type="hidden" id="delete_widget_id" value="">
                    <div class="flex justify-end py-5 px-8 space-x-5">
                        <button type="button" class="rounded-lg btn bg-transparent border-cht-gray-150 text-cht-gray-150 hover:text-cht-gray-150 hover:bg-cht-gray-150/10 btn-default close-chaty-popup-btn"><?php esc_html_e("Cancel", "chaty") ?></button>
                        <button type="submit" class="btn rounded-lg btn-primary drop-shadow-3xl"><?php esc_html_e("Rename Widget", "chaty") ?></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="chaty-popup" id="delete-widget">
    <div class="chaty-popup-outer"></div>
    <div class="chaty-popup-inner popup-pos-bottom">
        <div class="chaty-popup-content">
            <div class="chaty-popup-close">
                <a href="javascript:void(0)" class="close-delete-pop close-chaty-popup-btn right-2 top-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.6 15.5c-.53.53-1.38.53-1.91 0L8.05 9.87 2.31 15.6c-.53.53-1.38.53-1.91 0s-.53-1.38 0-1.9l5.65-5.64L.4 2.4C-.13 1.87-.13 1.02.4.49s1.38-.53 1.91 0l5.64 5.63L13.69.39c.53-.53 1.38-.53 1.91 0s.53 1.38 0 1.91L9.94 7.94l5.66 5.65c.52.53.52 1.38 0 1.91z"></path></svg>
                </a>
            </div>
            <div class="a-card a-card--normal">
                <div class="chaty-popup-header text-left font-primary text-cht-gray-150 font-medium p-5 relative">
                    <?php esc_html_e("Delete Widget?", "chaty") ?>
                </div>
                <div class="chaty-popup-body p-5 text-base font-primary text-cht-gray-150">
                    <?php esc_html_e("Are you sure you want to delete this widget?", "chaty") ?>
                </div>
                <input type="hidden" id="delete_widget_id" value="">
                <div class="flex justify-end p-5 space-x-5">
                    <button type="button" class="rounded-lg btn btn-default close-chaty-popup-btn bg-transparent border-cht-gray-150 text-cht-gray-150 hover:text-cht-gray-150 hover:bg-cht-gray-150/10"><?php esc_html_e("Cancel", "chaty") ?></button>
                    <button type="button" class="rounded-lg bg-transparent border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500 btn btn-primary" id="delete-widget-btn" onclick="javascript:removeWidgetItem();"><?php esc_html_e("Delete Widget", "chaty") ?></button>
                </div>
            </div>
        </div>
    </div>
</div>

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
                    <a href="<?php echo self_admin_url("plugin-install.php?s=chatway&tab=search&type=author") ?>" target="_blank">
                        <?php esc_html_e("Add Live Chat", "chaty") ?>
                        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 9.5L5 5.5L1 1.5" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include_once "review-popup.php" ?>

<script>
var dataWidget = -1;
jQuery(document).ready(function () {

    jQuery(document).on("click", ".clone-widget", function(){
        window.location = "<?php echo esc_url(admin_url("admin.php?page=chaty-upgrade")); ?>";
    });

    jQuery(document).on("click", ".change-chaty-status", function(e){
        dataWidget = jQuery(this).closest("tr").data("widget");
        jQuery.ajax({
            type: 'POST',
            url: ajaxurl,
            data: {
                action: 'change_chaty_widget_status',
                widget_nonce: jQuery("#widget_"+dataWidget).data("nonce"),
                widget_index: "_"+jQuery("#widget_"+dataWidget).data("widget")
            },
            beforeSend: function (xhr) {

            },
            success: function (res) {

            },
            error: function (xhr, status, error) {

            }
        });
    });

    jQuery(document).on("click", ".remove-widget", function(){
        dataWidget = jQuery(this).closest("tr").data("widget");
        jQuery("#delete-widget").show();
    });

    /* IIFE: action column button show hide scripts */
    (()=>{

        let $openedScope = null;
        function showHideDropdown( $scope, toggle = false ) {
            if( $scope && toggle ) {
                $scope.find('.action-dropdown-btn').addClass('bg-cht-gray-150/10');
                $scope.find('.action-dropdown').slideDown(250, 'linear');
            }
            if( $scope && !toggle ) {
                $scope.find('.action-dropdown-btn').removeClass('bg-cht-gray-150/10');
                $scope.find('.action-dropdown').slideUp(250, 'linear');
            }
        }

        // show element when click on 3 dots
        jQuery('.action-dropdown-btn').on('click', function(){
            const $scope = jQuery(this).parent().parent();
            const isSame = $scope.is( $openedScope );
            if( !isSame ) {
                showHideDropdown( $openedScope )
                showHideDropdown( $scope, true );
                $openedScope = $scope;
            }
            else {
                showHideDropdown( $scope, false );
                $openedScope = null;
            }
        })

        //hide elemnt when click out of element
        jQuery(document).on('click', function(ev){
            if( !ev.target.closest('.action-dropdown-btn')) {
                showHideDropdown($openedScope)
                $openedScope = null
            }
        })

        // show rename modal
        jQuery(".rename-widget").on('click', function(){
            jQuery(".chaty-popup-content").removeClass("form-loading");
            jQuery('#rename-widget').show();
            var WidgetId = jQuery(this).closest("tr").data("widget");
            jQuery("#widget_rename_id").val(WidgetId);
            var WidgetName = jQuery(this).closest("tr").find(".widget-title").text();
            jQuery("#widget_new_title").val(WidgetName);
            dataWidget = WidgetId;
        });

        // rename form submit
        jQuery(document).on("submit", "#rename-widget-form", function(e){
            jQuery("#rename-widget .chaty-popup-content").removeClass("form-loading");
            jQuery("#widget_new_title").removeClass("input-error");
            jQuery(this).find(".form-error-message").remove();
            if(jQuery("#widget_new_title").val() == "") {
                jQuery("#widget_new_title").addClass("input-error");
                jQuery("#widget_new_title").after("<span class='form-error-message'><?php esc_html_e("Widget name is required", "chaty") ?></span>");
            } else {
                jQuery("#rename-widget .chaty-popup-content").addClass("form-loading");
                jQuery.ajax({
                    type: 'POST',
                    url: ajaxurl,
                    data: {
                        action: 'rename_chaty_widget',
                        widget_nonce: jQuery("#widget_"+dataWidget).data("nonce"),
                        widget_index: "_"+jQuery("#widget_"+dataWidget).data("widget"),
                        widget_title: jQuery("#widget_new_title").val()
                    },
                    beforeSend: function (xhr) {
                        jQuery("#rename-widget-form .btn-primary").prop("disabled", true);

                    },
                    success: function (res) {
                        window.location = res;
                    },
                    error: function (xhr, status, error) {

                    }
                });
            }
            return false;
        });

        jQuery(document).on("click", "#add_chatyway_icon", function (){
            jQuery("#chatyway-info-popup").show();
        });

        jQuery(".chatyway-popup-box-btn a").on("click", function (){
            jQuery("#chatyway-info-popup").hide();
        });

    })()
});

function removeWidgetItem() {
    if(dataWidget == -1) {
        return;
    }
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data: {
            action: 'remove_chaty_widget',
            widget_nonce: jQuery("#widget_"+dataWidget).data("nonce"),
            widget_index: "_"+jQuery("#widget_"+dataWidget).data("widget")
        },
        beforeSend: function (xhr) {
            jQuery("#delete-widget .chaty-popup-content").addClass("form-loading");
            jQuery("#delete-widget-btn").prop("disabled", true);

        },
        success: function (res) {
            window.location = res;
        },
        error: function (xhr, status, error) {

        }
    });
}
</script>
