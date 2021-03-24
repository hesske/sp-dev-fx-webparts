/*
The svg files for the icons below were and can be downloaded from Microsof's github.
https://github.com/microsoft/fluentui-system-icons/tree/master/assets
  - You can see a full visual list of icons here https://github.com/microsoft/fluentui-system-icons/blob/master/icons.md

Once you have svg files you can follow Tiny MCE's documentation on creating an icon pack
https://www.tiny.cloud/docs/advanced/creating-an-icon-pack/
  - Creating an icon file basically requires
      - cloning https://github.com/tinymce/oxide-icon-pack-template from github and running npm install
      - copy the desired svg files to the src/svg folder in the project
      - run gulp
      - take the output javascript file (in /dist/js/icons.js) and massage it into the format below



https://www.tiny.cloud/docs/advanced/editor-icon-identifiers/
  - The last step is to replace Tiny MCEs SVG data with our own which requires knowing their icon identifiers we want to replace that our outlined here

*/
export class Icons {
  public static readonly ic_fluent_arrow_redo_24_regular = '<svg width="24" height="24"><path d="M19.3 2c-.4 0-.7.3-.8.6v5.8L13.9 4A6.4 6.4 0 005 3.7l-.1.2a6.4 6.4 0 000 9l8.8 8.9a.8.8 0 001-1l-8.8-9a5 5 0 016.8-7l.2.1 4.5 4.6h-5.6c-.4 0-.7.3-.8.6v.2c0 .3.3.6.6.7H19.2c.4 0 .7-.3.8-.6V2.7c0-.4-.3-.7-.8-.7z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_arrow_undo_24_regular = '<svg width="24" height="24"><path d="M4.8 2c.3 0 .6.3.7.6v5.8L10.1 4a6.4 6.4 0 018.9-.2l.1.2a6.4 6.4 0 010 9l-8.8 8.9a.8.8 0 01-1-1l8.8-9a5 5 0 00-6.8-7l-.2.1-4.5 4.6h5.7c.3 0 .6.3.7.6v.2c0 .3-.3.6-.6.7H4.8a.8.8 0 01-.8-.6V2.7c0-.4.3-.7.8-.7z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_color_24_regular = '<svg width="24" height="24"><path d="M3.8 5.9c3-4 9-5.1 13.4-2.4 4.3 2.7 5.9 7.8 4.1 12.6-1.7 4.5-6 6.3-9.2 4-1.1-.8-1.6-1.9-1.8-3.6l-.1-1V15c-.2-1-.4-1.4-.8-1.6-.5-.3-.9-.3-1.6 0l-.3.1h-.2c-1 .5-1.7.7-2.5.5h-.4c-2.8-1-3.2-4.7-.6-8.2zm1 6.7H5.1c.4.1.8 0 1.4-.2l.6-.3c1.2-.5 2-.5 3 0 1 .6 1.3 1.4 1.5 2.8v.4l.1.5v.5c.2 1.3.6 2 1.3 2.6 2.3 1.7 5.6.3 6.9-3.3 1.5-4.2.2-8.6-3.5-10.8A8.9 8.9 0 005 6.8c-2 2.7-1.8 5.2-.2 5.8zm11.2-2a1.2 1.2 0 112.5-.7 1.2 1.2 0 01-2.5.7zm.5 3.5a1.3 1.3 0 112.5-.7 1.3 1.3 0 01-2.5.7zm-2.4-6.5a1.2 1.2 0 112.4-.7 1.2 1.2 0 01-2.4.7zm0 9a1.2 1.2 0 112.4-.7 1.2 1.2 0 01-2.5.7zm-3.6-10A1.2 1.2 0 1113 6a1.2 1.2 0 01-2.5.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_copy_24_regular = '<svg width="24" height="24"><path d="M5.5 4.6v12.7c0 1.7 1.5 3.2 3.3 3.2h8.6c-.3.9-1.2 1.5-2.2 1.5H8.8A4.7 4.7 0 014 17.3V6.7c0-1 .6-1.8 1.5-2zM17.8 2C19 2 20 3 20 4.3v13c0 1.2-1 2.2-2.3 2.2h-9c-1.2 0-2.2-1-2.2-2.3v-13C6.5 3 7.5 2 8.8 2h9zm0 1.5h-9c-.5 0-.8.3-.8.8v13c0 .4.3.7.8.7h9c.4 0 .7-.3.7-.8v-13c0-.4-.3-.7-.8-.7z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_cut_24_regular = '<svg width="24" height="24"><path d="M12.1 9.3l-4.7-7a.7.7 0 10-1.3.9l5.2 7.5-2.4 3.8a4 4 0 101.2 1l2-3.4 2.1 3A4 4 0 0017 22a4 4 0 10-1.5-7.7l-2.4-3.6-1-1.4zM4.5 18a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm10 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"/><path d="M14 9.3l3.9-6.1a.7.7 0 10-1.3-.9L13 8l1 1.3z"/></svg>';
  public static readonly ic_fluent_dismiss_24_regular = '<svg width="24" height="24"><path d="M4.4 4.6v-.1c.3-.3.8-.3 1-.1h.1L12 11l6.5-6.4a.8.8 0 011 1L13.1 12l6.4 6.5c.3.2.3.7.1 1-.3.3-.8.3-1 .1h-.1L12 13l-6.5 6.4a.8.8 0 01-1-1l6.4-6.5-6.4-6.5a.8.8 0 01-.1-1z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_highlight_24_regular = '<svg width="24" height="24"><path d="M20.3 2c.3 0 .7.3.7.7v4.6c0 1.1-.9 2-2 2.2v2.2c0 1.2-1 2.2-2 2.3h-.5v2.8c0 .8-.4 1.5-1.1 2h-.2L8.6 22c-.5.3-1 0-1-.5l-.1-.1V14h-.3c-1.1 0-2.1-1-2.2-2.1V9.5c-1-.1-2-1-2-2V2.7a.8.8 0 011.5-.1v4.6c0 .3.3.6.6.7h13.7c.3 0 .6-.3.7-.6V2.8c0-.5.3-.8.8-.8zM15 14H9v6l5.6-2.5c.2-.1.4-.4.4-.6V14zm2.5-4.5h-11v2.2c0 .4.3.7.6.8h9.7c.3 0 .6-.3.7-.7V9.4z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_image_24_regular = '<svg width="24" height="24"><path d="M17.8 3C19.4 3 21 4.5 21 6.3v11.4c0 1.8-1.5 3.3-3.3 3.3H6.3A3.3 3.3 0 013 17.7V6.3C3 4.5 4.5 3 6.3 3h11.4zm.5 16.4l-5.8-5.7a.8.8 0 00-1 0l-5.8 5.7.5.1h11.6l.5-.1-5.8-5.7 5.8 5.7zm-.6-14.9H6.3c-1 0-1.8.8-1.8 1.8v11.4l.1.6 5.8-5.7c.9-.8 2.2-.8 3 0h.2l5.8 5.7.1-.6V6.3c0-1-.8-1.8-1.8-1.8zm-2.4 2a2.3 2.3 0 110 4.5 2.3 2.3 0 010-4.5zm0 1.5a.8.8 0 100 1.5.8.8 0 000-1.5z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_link_24_regular = '<svg width="24" height="24"><path d="M9.3 7a.8.8 0 010 1.5H7a3.5 3.5 0 00-.2 7h2.5a.7.7 0 010 1.5H7a5 5 0 01-.2-10h2.5zM17 7a5 5 0 01.2 10h-2.5a.7.7 0 010-1.5H17a3.5 3.5 0 00.2-7h-2.5a.7.7 0 010-1.5H17zM7 11.3h10a.7.7 0 01.1 1.4H7a.7.7 0 01-.1-1.4H17 7z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_link_edit_24_regular = '<svg width="24" height="24"><path d="M9.3 5a.8.8 0 010 1.5H7a3.5 3.5 0 00-.2 7h2.5a.8.8 0 010 1.5H7a5 5 0 01-.2-10h2.5zM17 5a5 5 0 015 5.9c-.5-.4-1-.7-1.5-.8V10c0-1.9-1.5-3.4-3.3-3.5h-2.5a.8.8 0 010-1.5H17z"/><path d="M7 9.3h10a.8.8 0 01.1 1.4H7a.8.8 0 01-.1-1.4H7zM12.2 17.6l5.9-6a2.3 2.3 0 113.2 3.3l-5.9 5.9c-.3.3-.7.6-1.2.7l-1.8.5a1 1 0 01-1.4-1.3l.5-1.9c.1-.5.4-.9.7-1.2zm7-4.9l-6 6-.3.5-.2 1.1 1.1-.2.6-.4 5.9-5.9a.8.8 0 10-1.1-1z"/></svg>';
  public static readonly ic_fluent_link_remove_20_regular = '<svg width="20" height="20"><path d="M14.5 10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-1.8 2.7c-.2.2-.2.5 0 .7l1 1.1-1 1a.5.5 0 00.7.8l1.1-1 1 1a.5.5 0 00.8-.7l-1-1.1 1-1a.5.5 0 00-.7-.8l-1.1 1-1-1a.5.5 0 00-.8 0zM8 4a.5.5 0 010 1H6a3 3 0 00-.2 6H8a.5.5 0 010 1H6a4 4 0 01-.2-8H8zm6 0a4 4 0 013.5 5.9l-.9-.5c.3-.4.4-.9.4-1.4a3 3 0 00-2.8-3H12a.5.5 0 010-1h2zm0 3.5a.5.5 0 010 1H6a.5.5 0 010-1h8z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_lock_24_regular = '<svg width="24" height="24"><path d="M12 2a4 4 0 014 4v2h1.8C19 8 20 9 20 10.3v9.4c0 1.3-1 2.3-2.3 2.3H6.3C5 22 4 21 4 19.7v-9.4C4 9 5 8 6.3 8H8V6a4 4 0 014-4zm5.8 7.5H6.2c-.4 0-.7.3-.7.8v9.4c0 .5.3.8.8.8h11.4c.5 0 .8-.3.8-.8v-9.4c0-.5-.3-.8-.8-.8zm-5.8 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-10A2.5 2.5 0 009.5 6v2h5V6c0-1.4-1.1-2.5-2.5-2.5z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_open_24_regular = '<svg width="24" height="24"><path d="M7.3 4.5h3.4A.8.8 0 0111 6H7.2C6.1 6 5.1 7 5 8V16.9c0 1.1 1 2.1 2.1 2.2h8.7c1.1 0 2.1-1 2.2-2.1v-3.7a.7.7 0 011.5 0v3.5c0 2-1.6 3.7-3.5 3.8H7c-2-.1-3.5-1.6-3.6-3.5V8c.1-2 1.6-3.5 3.6-3.6h3.6-3.4zM13.7 3H20.5l.2.2.2.1V3.6l.1.1v6.6a.8.8 0 01-1.5 0V5.6l-7.2 7.2c-.3.3-.7.3-1 0a.8.8 0 01-.2-1h.1l7.2-7.3h-4.7a.8.8 0 01-.7-.6v-.1c0-.4.3-.7.6-.8h.1z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_table_24_regular = '<svg width="24" height="24"><path d="M17.8 3C19.4 3 21 4.5 21 6.3v11.4c0 1.8-1.5 3.3-3.3 3.3H6.3A3.3 3.3 0 013 17.7V6.3C3 4.5 4.5 3 6.3 3h11.4zM14 15.5h-4v4h4v-4zm5.5 0h-4v4h2.3c1 0 1.7-.8 1.7-1.8v-2.2zm-11 0h-4v2.3c0 1 .8 1.7 1.8 1.7h2.2v-4zm0-5.5h-4v4h4v-4zm5.5 0h-4v4h4v-4zm5.5 0h-4v4h4v-4zm-11-5.5H6.2c-1 0-1.7.8-1.7 1.8v2.2h4v-4zm9.3 0h-2.3v4h4V6.2c0-1-.8-1.7-1.8-1.7zm-3.8 0h-4v4h4v-4z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_table_cells_merge_24_regular = '<svg width="24" height="24"><path d="M6.3 3A3.2 3.2 0 003 6.3v11.4C3 19.6 4.5 21 6.3 21h11.4c1.8 0 3.3-1.5 3.3-3.3V6.3C21 4.5 19.5 3 17.7 3H6.3zM4.5 6.3c0-1 .8-1.8 1.8-1.8H11v3H4.5V6.2zm8 10.2h7v1.3c0 1-.8 1.7-1.8 1.7h-5.2v-3zm7-9h-7v-3h5.3c1 0 1.7.8 1.7 1.8v1.2zm-8.5 9v3H6.2c-1 0-1.7-.8-1.7-1.8v-1.2H11zM4.5 9h15v6h-15V9z"/></svg>';
  public static readonly ic_fluent_table_cells_split_24_regular = '<svg width="24" height="24"><path d="M12.5 10H11v4h1.5v-4z"/><path d="M3 6.3C3 4.5 4.5 3 6.3 3h11.4C19.6 3 21 4.5 21 6.3v11.4c0 1.8-1.5 3.3-3.3 3.3H6.3A3.3 3.3 0 013 17.7V6.3zm3.3-1.8c-1 0-1.8.8-1.8 1.8v1.2H11v-3H6.2zm13.2 12h-7v3h5.3c1 0 1.7-.8 1.7-1.8v-1.2zm0-10.3c0-1-.8-1.7-1.8-1.7h-5.2v3h7V6.2zm-15 10.3v1.3c0 1 .8 1.7 1.8 1.7H11v-3H4.5zm0-1.5h15V9h-15v6z"/></svg>';
  public static readonly ic_fluent_table_column_delete_24_regular = '<svg width="24" height="24"><path d="M22 3.8c0-.5-.3-.8-.8-.8h-1A3.3 3.3 0 0017 6.3v11.4c0 1.8 1.5 3.3 3.3 3.3h1a.8.8 0 000-1.5h-1c-1 0-1.8-.8-1.8-1.8v-2.2h2.8a.8.8 0 000-1.5h-2.8v-4h2.8a.8.8 0 000-1.5h-2.8V6.2c0-1 .8-1.7 1.8-1.7h1c.4 0 .7-.3.7-.8zM2 3.8c0-.5.3-.8.8-.8h1C5.5 3 7 4.5 7 6.3v11.4C7 19.6 5.5 21 3.7 21h-1a.8.8 0 010-1.5h1c1 0 1.8-.8 1.8-1.8v-2.2H2.7a.8.8 0 010-1.5h2.8v-4H2.7a.8.8 0 010-1.5h2.8V6.2c0-1-.8-1.7-1.8-1.7h-1a.8.8 0 01-.7-.8zM11 12l-1.5 1.5a.7.7 0 101 1l1.5-1.4 1.5 1.4a.7.7 0 101-1L13.1 12l1.4-1.5a.7.7 0 10-1-1L12 10.9l-1.5-1.4a.7.7 0 10-1 1l1.4 1.5z"/><path d="M11.3 8.7v.1l.7.7.7-.7v-6a.8.8 0 00-1.4 0v6zM11.3 15.5v5.8a.8.8 0 001.4 0v-5.8l-.7-.7-.7.7z"/></svg>';
  public static readonly ic_fluent_table_delete_24_regular = '<svg width="24" height="24"><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.3-9C19.4 3 21 4.5 21 6.3V12l-1.5-.7V10h-4v1.3L14 12v-2h-4v4h2l-.7 1.5H10v4h1.3L12 21H6.2A3.3 3.3 0 013 17.7V6.3C3 4.5 4.5 3 6.3 3h11.4zM15 15.1c-.1.2-.1.6 0 .8l1.7 1.6-1.7 1.6a.5.5 0 00.8.8l1.6-1.7 1.6 1.7a.5.5 0 00.8-.8l-1.7-1.6 1.7-1.6a.5.5 0 00-.8-.8l-1.6 1.7-1.6-1.7a.5.5 0 00-.8 0zm-6.6.4h-4v2.3c0 .9.7 1.6 1.6 1.7H8.5v-4zm0-5.5h-4v4h4v-4zm0-5.5H6.2c-1 0-1.7.8-1.7 1.8v2.2h4v-4zm9.3 0h-2.3v4h4V6.2c0-.9-.7-1.6-1.6-1.7h-.1zm-3.8 0h-4v4h4v-4z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_table_insert_down_24_regular = '<svg width="24" height="24"><path d="M3.8 15.5a.8.8 0 01-.8-.8V6.3C3 4.5 4.5 3 6.3 3h11.4C19.6 3 21 4.5 21 6.3v8.4c0 .5-.3.8-.8.8H3.9zM10 14h4v-4h-4v4zm0-5.5h4v-4h-4v4zm5.5 5.5h4v-4h-4v4zm0-5.5h4V6.2c0-1-.8-1.7-1.8-1.7h-2.2v4zm-7-4H6.2c-1 0-1.7.8-1.7 1.8v2.2h4v-4zm-4 9.5h4v-4h-4v4zM3.8 19.5a.8.8 0 000 1.5h16.4a.8.8 0 000-1.5H3.9z"/></svg>';
  public static readonly ic_fluent_table_insert_left_24_regular = '<svg width="24" height="24"><path d="M4.5 3.8a.8.8 0 00-1.5 0v16.4a.8.8 0 001.5 0V3.9zM8.5 3.8c0-.5.3-.8.8-.8h8.4C19.6 3 21 4.5 21 6.3v11.4c0 1.8-1.5 3.3-3.3 3.3H9.3a.8.8 0 01-.8-.8V3.9zM10 10v4h4v-4h-4zm0 5.5v4h4v-4h-4zm5.5 0v4h2.3c1 0 1.7-.8 1.7-1.8v-2.2h-4zm0-5.5v4h4v-4h-4zm4-1.5V6.2c0-1-.8-1.7-1.8-1.7h-2.2v4h4zm-9.5-4v4h4v-4h-4z"/></svg>';
  public static readonly ic_fluent_table_insert_right_24_regular = '<svg width="24" height="24"><path d="M15.5 3.8c0-.5-.3-.8-.8-.8H6.3A3.3 3.3 0 003 6.3v11.4C3 19.6 4.5 21 6.3 21h8.4c.5 0 .8-.3.8-.8V3.9zM14 10v4h-4v-4h4zm-9.5 4v-4h4v4h-4zM14 8.5h-4v-4h4v4zm-5.5 0h-4V6.2c0-1 .8-1.7 1.8-1.7h2.2v4zm0 11H6.2c-1 0-1.7-.8-1.7-1.8v-2.2h4v4zm1.5-4h4v4h-4v-4zM19.5 3.8a.8.8 0 011.5 0v16.4a.8.8 0 01-1.5 0V3.9z"/></svg>';
  public static readonly ic_fluent_table_insert_up_24_regular = '<svg width="24" height="24"><path d="M20.3 4.5a.8.8 0 000-1.5H3.6a.8.8 0 000 1.5h16.6zM20.3 8.5c.4 0 .7.3.7.8v8.4c0 1.8-1.5 3.3-3.3 3.3H6.3A3.3 3.3 0 013 17.7V9.3c0-.5.3-.8.8-.8h16.4zM14 10h-4v4h4v-4zm-5.5 0h-4v4h4v-4zm0 5.5h-4v2.3c0 1 .8 1.7 1.8 1.7h2.2v-4zm5.5 0h-4v4h4v-4zm1.5 4h2.3c1 0 1.7-.8 1.7-1.8v-2.2h-4v4zm4-9.5h-4v4h4v-4z"/></svg>';
  public static readonly ic_fluent_table_move_down_24_regular = '<svg width="24" height="24"><path d="M3.8 15.5a.8.8 0 01-.8-.8V6.3C3 4.5 4.5 3 6.3 3h11.4C19.6 3 21 4.5 21 6.3v8.4c0 .5-.3.8-.8.8H16a1.7 1.7 0 00-2-2V10h-4v3.5a1.7 1.7 0 00-2 2H3.7zm6.2-7h4v-4h-4v4zm9.5 5.5v-4h-4v4h4zm-4-5.5h4V6.2c0-1-.8-1.7-1.8-1.7h-2.2v4zm-7-4H6.2c-1 0-1.7.8-1.7 1.8v2.2h4v-4zm-4 9.5h4v-4h-4v4zM3.8 19.5a.8.8 0 000 1.5h16.4a.8.8 0 000-1.5H3.9z"/><path d="M9.2 14.8c.3-.4.7-.4 1-.1l1 .9v-2.8a.8.8 0 011.6 0v2.8l1-1a.8.8 0 011 1.2l-2.3 2c-.3.3-.7.3-1 0l-2.2-2a.8.8 0 01-.1-1z"/></svg>';
  public static readonly ic_fluent_table_move_up_24_regular = '<svg width="24" height="24"><path d="M20.3 4.5a.8.8 0 000-1.5H3.6a.7.7 0 100 1.5h16.6zM20.3 8.5c.4 0 .7.3.7.8v8.4c0 1.8-1.5 3.3-3.3 3.3H6.3A3.3 3.3 0 013 17.7V9.3c0-.5.3-.8.8-.8H8a1.7 1.7 0 002 2V14h4v-3.5a1.7 1.7 0 002-2h4.3zM8.4 10h-4v4h4v-4zm0 5.5h-4v2.3c0 1 .8 1.7 1.8 1.7h2.2v-4zm5.5 4v-4h-4v4h4zm1.5 0h2.3c1 0 1.7-.8 1.7-1.8v-2.2h-4v4zm0-9.5v4h4v-4h-4z"/><path d="M14.8 9.2c-.3.4-.7.4-1 .1l-1-.9v2.8a.8.8 0 01-1.6 0V8.4l-1 1a.8.8 0 01-1-1.2l2.3-2c.3-.3.7-.3 1 0l2.2 2c.4.3.4.7.1 1z"/></svg>';
  public static readonly ic_fluent_table_row_delete_24_regular = '<svg width="24" height="24"><path d="M3.8 2c-.5 0-.8.3-.8.8v1C3 5.5 4.5 7 6.3 7h11.4C19.6 7 21 5.5 21 3.7v-1a.8.8 0 00-1.5 0v1c0 1-.8 1.8-1.8 1.8h-2.2V2.7a.8.8 0 00-1.5 0v2.8h-4V2.7a.8.8 0 00-1.5 0v2.8H6.2c-1 0-1.7-.8-1.7-1.8v-1c0-.4-.3-.7-.8-.7zM3.8 22a.8.8 0 01-.8-.8v-1C3 18.6 4.5 17 6.3 17h11.4c1.8 0 3.3 1.5 3.3 3.3v1a.8.8 0 01-1.5 0v-1c0-1-.8-1.8-1.8-1.8h-2.2v2.8a.8.8 0 01-1.5 0v-2.8h-4v2.8a.8.8 0 01-1.5 0v-2.8H6.2c-1 0-1.7.8-1.7 1.8v1c0 .4-.3.7-.8.7zM12 13l1.5 1.5a.7.7 0 101-1L13.1 12l1.4-1.5a.7.7 0 10-1-1L12 10.9l-1.5-1.4a.7.7 0 10-1 1l1.4 1.5-1.4 1.5a.7.7 0 101 1l1.5-1.4z"/><path d="M8.7 12.8l.1-.1.7-.7-.7-.7h-6a.8.8 0 000 1.4h6zM15.5 12.8h5.8a.8.8 0 000-1.6h-5.8v.1l-.7.7.7.7z"/></svg>';
  public static readonly ic_fluent_table_settings_24_regular = '<svg width="24" height="24"><path d="M17.5 12H18.4l.1.8a2 2 0 002.4 1.5h.1l.6-.2.8 1.2.1.3-.4.5a2 2 0 00-.2 2.7l.2.1.4.5-.7 1.3-.2.2-.6-.1a2 2 0 00-2.4 1.3v.1l-.2.7a5.2 5.2 0 01-1.5 0h-.3l-.1-.7a2 2 0 00-2.4-1.5H14l-.6.2-.8-1.2-.1-.3.4-.5c.8-.7.9-2 .2-2.7l-.2-.1-.4-.5.7-1.3.2-.2.6.1a2 2 0 002.4-1.3v-.1l.2-.7.9-.1zm.3-9C19.4 3 21 4.5 21 6.3V12l-1.5-.7V10h-4v1.3L14 12v-2h-4v4h2l-.7 1.5H10v4h1.3L12 21H6.2A3.3 3.3 0 013 17.7V6.3C3 4.5 4.5 3 6.3 3h11.4zM8.4 15.5h-4v2.3c0 .9.7 1.6 1.6 1.7H8.5v-4zm9 .5c-.8 0-1.4.7-1.4 1.5s.6 1.5 1.4 1.5c.8 0 1.4-.7 1.4-1.5s-.6-1.5-1.4-1.5zm-9-6h-4v4h4v-4zm0-5.5H6.2c-1 0-1.7.8-1.7 1.8v2.2h4v-4zm9.3 0h-2.3v4h4V6.2c0-.9-.7-1.6-1.6-1.7h-.1zm-3.8 0h-4v4h4v-4z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_align_center_24_regular = '<svg width="24" height="24"><path d="M17.3 18a.8.8 0 010 1.5H6.7a.8.8 0 010-1.5h10.6zm4-6.5a.8.8 0 010 1.5H2.6a.8.8 0 010-1.5h18.6zm-2-6.5a.8.8 0 010 1.5H4.7a.8.8 0 010-1.5h14.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_align_justify_24_regular = '<svg width="24" height="24"><path d="M21.3 18a.8.8 0 010 1.5H2.6a.8.8 0 010-1.5h18.6zm0-6.5a.8.8 0 010 1.5H2.6a.8.8 0 010-1.5h18.6zm0-6.5a.8.8 0 010 1.5H2.6a.8.8 0 010-1.5h18.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_align_left_24_regular = '<svg width="24" height="24"><path d="M13.3 18a.8.8 0 010 1.5H2.7a.8.8 0 010-1.5h10.6zm8-6.5a.8.8 0 010 1.5H2.6a.8.8 0 010-1.5h18.6zm-3-6.5a.8.8 0 010 1.5H2.7a.8.8 0 010-1.5h15.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_align_right_24_regular = '<svg width="24" height="24"><path d="M21.3 18a.8.8 0 010 1.5H10.7a.8.8 0 010-1.5h10.6zm0-6.5a.8.8 0 010 1.5H2.6a.8.8 0 010-1.5h18.6zm0-6.5a.8.8 0 010 1.5H5.7a.8.8 0 010-1.5h15.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_bold_24_regular = '<svg width="24" height="24"><path d="M12.4 4a4.6 4.6 0 013.7 7.3c1.1.8 1.9 2.1 1.9 3.8a5 5 0 01-4.9 4.9H8c-.8 0-1.5-.7-1.5-1.5v-13A1.5 1.5 0 018 4h4.4zm.7 9.3H9.5V17h3.6a2 2 0 001.9-1.9c0-1.1-1-1.8-1.9-1.8zM12.4 7H9.5v3.3h2.9c.9 0 1.6-.8 1.6-1.7 0-.8-.7-1.6-1.6-1.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_bullet_list_24_regular = '<svg width="24" height="24"><path d="M3.2 16a1.2 1.2 0 110 2.5 1.2 1.2 0 010-2.5zm3.5.5h14.6a.7.7 0 010 1.5H6.7a.7.7 0 010-1.5h14.6H6.7zM3.3 11a1.2 1.2 0 110 2.5 1.2 1.2 0 010-2.5zm3.5.5h14.6a.7.7 0 010 1.5H6.7a.7.7 0 010-1.5h14.6H6.7zM3.3 6a1.2 1.2 0 110 2.5 1.2 1.2 0 010-2.5zm3.5.5h14.6a.7.7 0 010 1.5H6.7a.8.8 0 010-1.5h14.6H6.7z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_bullet_list_square_24_regular = '<svg width="24" height="24"><path d="M18.8 3c1.1 0 2.1 1 2.2 2.1v13.6c0 1.2-1 2.2-2.1 2.3H5.2c-1.1 0-2.1-1-2.2-2.1V5.2C3 4.2 4 3.1 5.1 3h13.6zm0 1.5H5.2c-.3 0-.6.3-.7.6v13.6c0 .4.3.7.6.8h13.6c.4 0 .7-.3.8-.6V5.2c0-.3-.3-.6-.6-.7h-.1zm-11 10.3a1 1 0 110 2 1 1 0 010-2zm9 .2a.7.7 0 010 1.5h-5.5A.7.7 0 0111 15H16.7zm-9-4a1 1 0 110 2 1 1 0 010-2zm9 .3a.7.7 0 110 1.4h-5.5a.7.7 0 110-1.4h5.4zm-9-4a1 1 0 110 2 1 1 0 010-2zm9 .2a.8.8 0 010 1.5h-5.6a.8.8 0 010-1.5h5.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_clear_formatting_24_regular = '<svg width="24" height="24"><path d="M2.2 13.8l.6.2c.3 0 .6-.2.7-.6l1-2.9h5l1 3c.1.3.4.5.7.5.3 0 .4 0 .6-.2l.2-.4v-.5L8 2.7c-.2-.5-.5-.7-1-.7s-.8.2-1 .7L2 13v.5c0 .1 0 .3.2.4zM9 9.3H5l2-5.4 2 5.4zM13 13.1l1.7-1.7a4 4 0 01-.3-1.8c0-.9.2-1.6.7-2.2.4-.6 1-.9 1.8-.9.7 0 1.3.3 1.7.9.4.4.6 1 .7 1.7.4.2.8.4 1.1.8l.3.2v-.5c0-1.3-.3-2.3-1-3.1a3.2 3.2 0 00-2.5-1.2c-.6 0-1.2.1-1.6.4a3 3 0 00-1.2 1.1v-4c0-.3 0-.4-.2-.6a.7.7 0 00-.5-.2c-.2 0-.4 0-.5.2l-.2.6V13z"/><path d="M17 21.5h3a.7.7 0 110 1.5h-5.5a2 2 0 01-1.2-.6l-2.7-2.7a2 2 0 010-2.8l6.3-6.3a2 2 0 012.8 0l2.7 2.7c.8.8.8 2 0 2.8L17 21.5zm1-9.9L14 15.8l3.3 3.3 4.2-4.1v-.6l-2.8-2.8a.5.5 0 00-.6 0zM12.8 17L11.6 18v.6l2.8 2.8h.6l1.1-1.2-3.3-3.3z"/></svg>';
  public static readonly ic_fluent_text_color_24_filled = '<svg width="24" height="24"><path d="M17.8 14.5c1.2 0 2.2 1 2.2 2.3v3c0 1.2-1 2.2-2.3 2.2H5.3C4 22 3 21 3 19.8v-3c0-1.3 1-2.3 2.3-2.3h12.4zM7 12l3.7-9.5c.2-.6 1-.7 1.4-.1l3.7 9.6a.7.7 0 01-1.3.6l-1-2.6H9.4l-1 2.5c0 .4-.5.6-.8.5h-.1a.8.8 0 01-.5-1l3.8-9.5L7.1 12zm4.4-7.2L10 8.5h3l-1.5-3.7z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_color_24_regular = '<svg width="24" height="24"><path d="M17.8 14.5c1.2 0 2.2 1 2.2 2.3v3c0 1.2-1 2.2-2.3 2.2H5.3C4 22 3 21 3 19.8v-3c0-1.3 1-2.3 2.3-2.3h12.4zm0 1.5H5.2c-.4 0-.7.3-.7.8v3c0 .4.3.7.8.7h12.4c.5 0 .8-.3.8-.7v-3c0-.5-.3-.8-.8-.8zM7 12l3.7-9.5c.2-.6 1-.7 1.4-.1l3.7 9.6a.7.7 0 01-1.3.6l-1-2.6H9.4l-1 2.5c0 .4-.5.6-.8.5h-.1a.8.8 0 01-.5-1l3.8-9.5L7.1 12zm4.4-7.2L10 8.5h3l-1.5-3.7z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_indent_decrease_24_regular = '<svg width="24" height="24"><path d="M17.8 16a.7.7 0 110 1.5h-9a.7.7 0 110-1.5h9zm-15-4.8l2-2a.8.8 0 011 1l-1.5 1.6 1.5 1.4a.8.8 0 01-1 1.2v-.1l-2-2a.8.8 0 01-.2-1h.1l2-2-2 2zm18-.2a.7.7 0 110 1.5h-12a.7.7 0 110-1.5h12zm-3-5a.7.7 0 110 1.5h-9a.8.8 0 010-1.5h9z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_indent_increase_24_regular = '<svg width="24" height="24"><path d="M17.8 16a.7.7 0 110 1.5h-9a.7.7 0 110-1.5h9zm-15-6.8c.2-.2.6-.3.9 0l2 2c.3.3.4.7.2 1h-.1l-2 2a.8.8 0 01-1.2-.9h.1l1.5-1.6-1.5-1.4a.8.8 0 010-1zm18 1.8a.7.7 0 110 1.5h-12a.7.7 0 110-1.5h12zm-3-5a.7.7 0 110 1.5h-9a.8.8 0 010-1.5h9z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_italic_24_regular = '<svg width="24" height="24"><path d="M9.8 4h8.5a.7.7 0 010 1.5H15l-5 13h4.1c.4 0 .7.3.8.6v.1c0 .4-.3.7-.6.8H4.7a.7.7 0 01-.7-.8c0-.3.3-.6.6-.7H8.4l5-13H9.7a.8.8 0 01-.7-.6v-.2c0-.3.3-.6.6-.7h8.7-8.6z" fill-rule="nonzero"/></svg>';
  public static readonly ic_fluent_text_number_format_24_regular = '<svg width="20" height="20"><path d="M5 3c.2 0 .3.1.4.3l1.8 5a.5.5 0 11-1 .4L6 8H3.7l-.2.7a.5.5 0 01-1-.4l2-5c0-.2.2-.3.4-.3zM4 7h1.5L5 5l-.8 2zM8.5 3H10c.2 0 .6 0 1 .2l.6.6.2 1c0 .4-.1.8-.3 1l.4.5.2 1c0 .7-.3 1.2-.8 1.4-.4.3-.8.3-1 .3H8.4a.5.5 0 01-.5-.5v-5c0-.3.2-.5.5-.5zM10 4H9v1.5h1l.5-.1c.1-.1.3-.2.3-.6l-.1-.5-.2-.2A1 1 0 0010 4zM9 6.5V8h1.3l.5-.1c.2-.1.3-.3.3-.7a1.1 1.1 0 000-.4l-.3-.2-.6-.1H9zM17.4 4.5c-.2-.7-.6-1-1-1.3-.5-.2-.9-.2-1.2-.2a2 2 0 00-1.3.5l-.7 1a4 4 0 00-.2 1.3c0 .4 0 1.1.2 1.7l.7 1c.3.3.7.4 1.3.5.4 0 1.6 0 2.2-1.3a.5.5 0 10-1-.4c-.2.7-.8.7-1.1.7-.4 0-.6-.2-.8-.3l-.3-.5c-.2-.5-.2-1-.2-1.4a2.2 2.2 0 010-.3c0-.2 0-.4.2-.7 0-.2.2-.4.4-.6l.6-.2.7.1c.2 0 .4.3.6.8a.5.5 0 001-.4zM14.2 12.2l-.2.3a.5.5 0 01-1-.2c0-.3.2-.6.5-.8a2 2 0 011.3-.5c1.2 0 1.9.9 1.9 1.6a1.9 1.9 0 01-.5 1.4 1.5 1.5 0 01.2.2c.2.3.3.6.3 1 0 .6-.2 1-.6 1.4a2 2 0 01-1.3.4 2 2 0 01-1-.3c-.4-.2-.6-.5-.8-1a.5.5 0 011-.3l.1.3v.1h.1a.5.5 0 00.2.1l.4.1c.3 0 .5 0 .6-.2.2 0 .3-.3.3-.7v-.3l-.3-.2-.8-.1a.5.5 0 110-1c.6 0 .8-.2 1-.3v-.6c0-.2-.1-.6-.8-.6l-.6.2zM9 12.9c0-.5.4-.9.8-.9s.6.2.8.4c.1.2.2.5 0 .9l-.6.6a14.3 14.3 0 00-.8.6c-.6.4-1.2 1-1.2 2 0 .3.2.5.5.5h2.7a.5.5 0 100-1H9c.1-.3.4-.5.7-.7l.3-.3.5-.3c.3-.3.6-.5.8-.9.4-.7.4-1.4 0-2-.3-.5-1-.8-1.6-.8-1 0-1.8 1-1.8 1.9a.5.5 0 101 0zM4.4 13.7l.6-.4v3.2a.5.5 0 101 0v-5a.5.5 0 00-1-.1c0 .5-.5 1.1-1.1 1.5a.5.5 0 10.5.8z"/></svg>';
  public static readonly ic_fluent_text_underline_24_regular = '<svg width="24" height="24"><path d="M6.7 19h10.5a.7.7 0 01.2 1.5H6.7a.7.7 0 010-1.5h10.5H6.7zM17.2 4c.4 0 .7.3.8.6v6.2c0 4.3-2 6.7-6 6.7-3.9 0-6-2.3-6-6.5V4.7a.8.8 0 011.5 0v6c0 3.7 1.4 5.3 4.5 5.3 3 0 4.4-1.6 4.5-5V4.7c0-.4.3-.7.7-.7z" fill-rule="nonzero"/></svg>';
}
