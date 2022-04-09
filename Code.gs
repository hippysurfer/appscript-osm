function onOpen(e) {  
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu('OSM');

    menu.addItem('test', test);
    
    if (!osm_has_app_creds()) {
      menu.addItem('Setup', 'osm_setup_app');
    } else {
      var driveService = osm_getOSMService();
      if (!driveService.hasAccess()) {      
        menu.addItem('Authorise', 'osm_authorise');
        menu.addItem('Clear App Credentials', 'osm_remove_app');
      } else {
        menu.addItem('De-Authorise', 'osm_logout');
      }
    }

    // if (e && (e.authMode == ScriptApp.AuthMode.NONE )) {
    //   menu.addItem("Enable", "use");
    // } else if (!has_creds()) {      
    //   menu.addItem('Authorise', 'authorise');      
    // } else {      
    //   menu.addItem("Fetch Members ...", "show_fetch_members_dialog");
    //   menu.addItem("Fetch Movers ...", "show_fetch_movers_dialog");
    //   menu.addItem("Fetch Event ...", "show_fetch_event_dialog");
    //   menu.addItem("Fetch Registers ...", "show_fetch_registers_dialog");
    //   menu.addItem("Fetch Payments ...", "action_payments");
    //   menu.addItem("Fetch MailMerge ...", "show_fetch_mailmerge_dialog");
    //   menu.addSeparator();
    //   menu.addItem("De-authorise", "remove_creds");      
    // }
    menu.addToUi();  
}