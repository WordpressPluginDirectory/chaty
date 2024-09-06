<div class="step-four chatway-content flex gap-4 items-center">
    <div class="chatway-left flex-1 hidden sm:flex">
        <img src="<?php echo esc_url(CHT_PLUGIN_URL) ?>admin/assets/images/chatway.png" alt="chatway" />
    </div>
    <div class="chatway-right flex-1 pl-4 sm:pl-0 ">
        <div class="chatway-title text-xl font-semibold pb-4 font-primary text-cht-gray-150"><?php esc_html_e("Add Chatway Live Chat widget to your website", "chaty"); ?></div>
        <ul>
            <li class="text-cht-gray-150 text-base flex">
                <span class="flex-none inline-flex items-center w-6 h-6 bg-[#e4fff5] mr-2 rounded-full text-center"><svg class="mx-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M13.333 4l-7.334 7.333L2.666 8" stroke="#68CB9B" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                <?php esc_html_e("Unlimited conversations, email, and Facebook Messenger integrations", "chaty"); ?>
            </li>
            <li class="text-cht-gray-150 text-base flex">
                <span class="flex-none inline-flex items-center w-6 h-6 bg-[#e4fff5] mr-2 rounded-full text-center"><svg class="mx-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M13.333 4l-7.334 7.333L2.666 8" stroke="#68CB9B" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                <?php esc_html_e("Team collaboration with agents", "chaty"); ?>
            </li>
            <li class="text-cht-gray-150 text-base flex">
                <span class="flex-none inline-flex items-center w-6 h-6 bg-[#e4fff5] mr-2 rounded-full text-center"><svg class="mx-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M13.333 4l-7.334 7.333L2.666 8" stroke="#68CB9B" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                <?php esc_html_e("Canned responses, private notes, reminders, and more", "chaty"); ?>
            </li>
            <li class="text-cht-gray-150 text-base flex">
                <span class="flex-none inline-flex items-center w-6 h-6 bg-[#e4fff5] mr-2 rounded-full text-center"><svg class="mx-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M13.333 4l-7.334 7.333L2.666 8" stroke="#68CB9B" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                <?php esc_html_e("iOS & Android apps available", "chaty"); ?>
            </li>
        </ul>
        <?php
        $chatwayStatus = apply_filters('check_for_chatway', false);
        if(!$chatwayStatus) { ?>
            <div class="chatway-footer mt-5">
                <a target="_blank" href="<?php echo self_admin_url("admin.php?page=chaty-live-chat") ?>" class="inline-flex font-primary items-center w-64 gap-2.5 py-1 border border-solid text-center justify-center border-[#0446de] rounded-lg text-[#0446de] hover:text-[#0446de] hover:bg-[#edf3f6]">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" tabindex="-1"><path d="M7.367 22.703l1.638-2.863L10.19 21.7s-.754-.134-1.44.194c-.687.328-1.384.81-1.384.81z" fill="#0038A5"></path><path d="M6.193 21.342a.97.97 0 00-.712-.564l-3.894-.72A1.94 1.94 0 010 18.153V6.534c0-1.43.7-2.77 1.876-3.585L4.39 1.205A4.606 4.606 0 017.798.45l8.982 1.548A3.879 3.879 0 0120 5.821v8.8c0 1.043-.42 2.04-1.163 2.77l-3.199 3.138a5.091 5.091 0 01-4.603 1.349l-1.858-.387a.97.97 0 00-.906.286l-.782.836a.485.485 0 01-.798-.137l-.498-1.134z" fill="#0446DE"></path><path d="M4.264 4.353a3.152 3.152 0 00-3.78 3.089v9.924a1.94 1.94 0 001.587 1.907l3.858.714a.97.97 0 01.719.582l.346.832c.105.253.44.303.615.094l.668-.801a.97.97 0 01.818-.346l3.067.232a2.667 2.667 0 002.868-2.659V8.126a1.94 1.94 0 00-1.553-1.9L4.264 4.352z" fill="#0038A5"></path><path d="M4.055 4.34a1.94 1.94 0 00-2.309 1.905v10.204a1.94 1.94 0 001.662 1.92l2.646.383a.97.97 0 01.739.546l.371.789a.364.364 0 00.614.098l.56-.65a.97.97 0 01.874-.327l3.601.521a1.94 1.94 0 002.217-1.92V8.07a1.94 1.94 0 00-1.57-1.904L4.055 4.34z" fill="#fff"></path><path d="M10.91 14.59L5.31 13.61c-.407-.072-.738.254-.58.636.511 1.242 1.94 3.195 4.473 2.544.522-.134 1.701-.812 2.034-1.715.083-.226-.092-.442-.329-.484z" fill="#0446DE"></path><ellipse cx="5.503" cy="9.962" rx=".993" ry="1.702" transform="rotate(-4.903 5.503 9.962)" fill="#0446DE"></ellipse><ellipse cx="10.749" cy="10.931" rx=".993" ry="1.702" transform="rotate(-4.903 10.749 10.93)" fill="#0446DE"></ellipse></svg>
                    <?php esc_html_e("Add Live Chat", "chaty") ?>
                </a>
            </div>
        <?php } else { ?>
            <div class="chatway-footer mt-5">
                <a href="<?php echo admin_url("admin.php?page=chatway") ?>" target="_blank" class="inline-flex font-primary items-center w-64 gap-2.5 py-1 border border-solid text-center justify-center border-[#0446de] rounded-lg text-[#0446de] hover:text-[#0446de] hover:bg-[#edf3f6]">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" tabindex="-1"><path d="M7.367 22.703l1.638-2.863L10.19 21.7s-.754-.134-1.44.194c-.687.328-1.384.81-1.384.81z" fill="#0038A5"></path><path d="M6.193 21.342a.97.97 0 00-.712-.564l-3.894-.72A1.94 1.94 0 010 18.153V6.534c0-1.43.7-2.77 1.876-3.585L4.39 1.205A4.606 4.606 0 017.798.45l8.982 1.548A3.879 3.879 0 0120 5.821v8.8c0 1.043-.42 2.04-1.163 2.77l-3.199 3.138a5.091 5.091 0 01-4.603 1.349l-1.858-.387a.97.97 0 00-.906.286l-.782.836a.485.485 0 01-.798-.137l-.498-1.134z" fill="#0446DE"></path><path d="M4.264 4.353a3.152 3.152 0 00-3.78 3.089v9.924a1.94 1.94 0 001.587 1.907l3.858.714a.97.97 0 01.719.582l.346.832c.105.253.44.303.615.094l.668-.801a.97.97 0 01.818-.346l3.067.232a2.667 2.667 0 002.868-2.659V8.126a1.94 1.94 0 00-1.553-1.9L4.264 4.352z" fill="#0038A5"></path><path d="M4.055 4.34a1.94 1.94 0 00-2.309 1.905v10.204a1.94 1.94 0 001.662 1.92l2.646.383a.97.97 0 01.739.546l.371.789a.364.364 0 00.614.098l.56-.65a.97.97 0 01.874-.327l3.601.521a1.94 1.94 0 002.217-1.92V8.07a1.94 1.94 0 00-1.57-1.904L4.055 4.34z" fill="#fff"></path><path d="M10.91 14.59L5.31 13.61c-.407-.072-.738.254-.58.636.511 1.242 1.94 3.195 4.473 2.544.522-.134 1.701-.812 2.034-1.715.083-.226-.092-.442-.329-.484z" fill="#0446DE"></path><ellipse cx="5.503" cy="9.962" rx=".993" ry="1.702" transform="rotate(-4.903 5.503 9.962)" fill="#0446DE"></ellipse><ellipse cx="10.749" cy="10.931" rx=".993" ry="1.702" transform="rotate(-4.903 10.749 10.93)" fill="#0446DE"></ellipse></svg>
                    <?php esc_html_e("Manage Live Chat", "chaty") ?>
                </a>
            </div>
        <?php } ?>
        <div class="font-primary w-64 text-center mt-1 text-cht-gray-150 text-xs"><?php esc_html_e("You can skip this step by saving the widget", "chaty") ?></div>
    </div>
</div>