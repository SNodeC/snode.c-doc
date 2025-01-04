/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "SNode.C", "index.html", [
    [ "GitHub", "^https://github.com/VolkerChristian/snode.c", null ],
    [ "Simple NODE in C++ (SNode.C)", "md_README.html", [
      [ "Table of Content", "md_README.html#table-of-content", null ],
      [ "License", "md_README.html#license", null ],
      [ "Copyright", "md_README.html#copyright", null ],
      [ "Quick Starting Guide", "md_README.html#quick-starting-guide", [
        [ "An \"Echo\" Application", "md_README.html#an-echo-application", [
          [ "SocketServer and SocketClient Instances", "md_README.html#socketserver-and-socketclient-instances", null ],
          [ "SocketContextFactory Classes", "md_README.html#socketcontextfactory-classes", [
            [ "Echo-Server SocketContextFactory", "md_README.html#echo-server-socketcontextfactory", null ],
            [ "Echo-Client SocketContextFactory", "md_README.html#echo-client-socketcontextfactory", null ]
          ] ],
          [ "SocketContext Classes", "md_README.html#socketcontext-classes", [
            [ "Echo-Server SocketContext", "md_README.html#echo-server-socketcontext", null ],
            [ "Echo-Client SocketContext", "md_README.html#echo-client-socketcontext", null ]
          ] ],
          [ "Main Applications for Server and Client", "md_README.html#main-applications-for-server-and-client", [
            [ "Echo-Server Main Application", "md_README.html#echo-server-main-application", null ],
            [ "Echo-Client Main Application", "md_README.html#echo-client-main-application", null ]
          ] ],
          [ "CMakeLists.txt file for Building and Installing our echoserver and echoclient", "md_README.html#cmakeliststxt-file-for-building-and-installing-our-echoserver-and-echoclient", null ]
        ] ],
        [ "Summary", "md_README.html#summary", null ]
      ] ],
      [ "Installation", "md_README.html#installation", [
        [ "Supported Systems and Hardware", "md_README.html#supported-systems-and-hardware", null ],
        [ "Minimum required Compiler Versions", "md_README.html#minimum-required-compiler-versions", null ],
        [ "Requirements and Dependencies", "md_README.html#requirements-and-dependencies", [
          [ "Tools", "md_README.html#tools", [
            [ "Mandatory", "md_README.html#mandatory", null ],
            [ "Optional", "md_README.html#optional", null ]
          ] ],
          [ "Libraries", "md_README.html#libraries", [
            [ "Mandatory", "md_README.html#mandatory-1", null ],
            [ "Optional", "md_README.html#optional-1", null ],
            [ "In-Framework", "md_README.html#in-framework", null ]
          ] ]
        ] ],
        [ "Installation on Debian Style Systems (x86-64, Arm)", "md_README.html#installation-on-debian-style-systems-x86-64-arm", [
          [ "Requirements and Dependencies", "md_README.html#requirements-and-dependencies-1", null ],
          [ "SNode.C", "md_README.html#snodec", null ]
        ] ],
        [ "Deploment on OpenWRT", "md_README.html#deploment-on-openwrt", [
          [ "Choose and Download a SDK", "md_README.html#choose-and-download-a-sdk", null ],
          [ "Patch the SDK to Integrate the SNode.C Feed", "md_README.html#patch-the-sdk-to-integrate-the-snodec-feed", null ],
          [ "Install the SNode.C Package and its Dependencies", "md_README.html#install-the-snodec-package-and-its-dependencies", null ],
          [ "Configure the SDK", "md_README.html#configure-the-sdk", null ],
          [ "Cross Compile SNode.C", "md_README.html#cross-compile-snodec", null ],
          [ "Deploy SNode.C", "md_README.html#deploy-snodec", null ]
        ] ]
      ] ],
      [ "Design Decisions and Features", "md_README.html#design-decisions-and-features", null ],
      [ "Fundamental Architecture", "md_README.html#fundamental-architecture", [
        [ "Network Layer", "md_README.html#network-layer", null ],
        [ "Transport Layer", "md_README.html#transport-layer", null ],
        [ "Connection Layer", "md_README.html#connection-layer", null ],
        [ "Application Layer", "md_README.html#application-layer", null ]
      ] ],
      [ "Existing SocketServer and SocketClient Classes", "md_README.html#existing-socketserver-and-socketclient-classes", [
        [ "Common Aspects of SocketServer and SocketClient Classes", "md_README.html#common-aspects-of-socketserver-and-socketclient-classes", [
          [ "SocketAddress", "md_README.html#socketaddress", [
            [ "SocketAddress Constructors", "md_README.html#socketaddress-constructors", null ]
          ] ],
          [ "SocketConnection", "md_README.html#socketconnection", [
            [ "Most Important common SocketConnection Methods", "md_README.html#most-important-common-socketconnection-methods", null ]
          ] ],
          [ "Constructors of SocketServer and SocketClient Classes", "md_README.html#constructors-of-socketserver-and-socketclient-classes", [
            [ "All Constructors of SocketServer Classes", "md_README.html#all-constructors-of-socketserver-classes", null ],
            [ "All Constructors of SocketClient Classes", "md_README.html#all-constructors-of-socketclient-classes", null ]
          ] ],
          [ "Constructor Callbacks", "md_README.html#constructor-callbacks", [
            [ "The onConnect Callback", "md_README.html#the-onconnect-callback", null ],
            [ "The onConnected Callback", "md_README.html#the-onconnected-callback", null ],
            [ "The onDisconnected Callback", "md_README.html#the-ondisconnected-callback", null ],
            [ "Attaching the Callbacks during Instance Creation", "md_README.html#attaching-the-callbacks-during-instance-creation", null ],
            [ "Attaching the Callbacks to already existing Instances", "md_README.html#attaching-the-callbacks-to-already-existing-instances", null ]
          ] ]
        ] ],
        [ "SocketServer Classes", "md_README.html#socketserver-classes", [
          [ "SocketServer Header Files", "md_README.html#socketserver-header-files", null ],
          [ "Listen Methods", "md_README.html#listen-methods", [
            [ "SocketAddress Types", "md_README.html#socketaddress-types", null ],
            [ "The core::socket::State Object", "md_README.html#the-coresocketstate-object", null ],
            [ "Common listen() Methods", "md_README.html#common-listen-methods", null ],
            [ "IPv4 specific listen() Methods", "md_README.html#ipv4-specific-listen-methods", null ],
            [ "IPv6 specific listen() Methods", "md_README.html#ipv6-specific-listen-methods", null ],
            [ "Unix Domain Socket specific listen() Methods", "md_README.html#unix-domain-socket-specific-listen-methods", null ],
            [ "Bluetooth RFCOMM specific listen() Methods", "md_README.html#bluetooth-rfcomm-specific-listen-methods", null ],
            [ "Bluetooth L2CAP specific listen() Methods", "md_README.html#bluetooth-l2cap-specific-listen-methods", null ]
          ] ]
        ] ],
        [ "SocketClient Classes", "md_README.html#socketclient-classes", [
          [ "SocketClient Header Files", "md_README.html#socketclient-header-files", null ],
          [ "Connect Methods", "md_README.html#connect-methods", [
            [ "SocketAddress Types", "md_README.html#socketaddress-types-1", null ],
            [ "The core::socket::State Object", "md_README.html#the-coresocketstate-object-1", null ],
            [ "Common connect() Methods", "md_README.html#common-connect-methods", null ],
            [ "IPv4 specific connect() Methods", "md_README.html#ipv4-specific-connect-methods", null ],
            [ "IPv6 specific connect() Methods", "md_README.html#ipv6-specific-connect-methods", null ],
            [ "Unix Domain Socket specific connect() Methods", "md_README.html#unix-domain-socket-specific-connect-methods", null ],
            [ "Bluetooth RFCOMM specific connect() Methods", "md_README.html#bluetooth-rfcomm-specific-connect-methods", null ],
            [ "Bluetooth L2CAP specific connect() Methods", "md_README.html#bluetooth-l2cap-specific-connect-methods", null ]
          ] ]
        ] ]
      ] ],
      [ "Configuration", "md_README.html#configuration", [
        [ "Three different Options for Configuration", "md_README.html#three-different-options-for-configuration", [
          [ "Configuration using the C++ API", "md_README.html#configuration-using-the-c-api", [
            [ "List of all Configuration Items", "md_README.html#list-of-all-configuration-items", null ]
          ] ],
          [ "Configuration via the Command Line", "md_README.html#configuration-via-the-command-line", [
            [ "Application Configuration", "md_README.html#application-configuration", null ],
            [ "Instance Configuration", "md_README.html#instance-configuration", [
              [ "Sections", "md_README.html#sections", null ],
              [ "Using the Parameterless listen() Methods when no Configuration File exists", "md_README.html#using-the-parameterless-listen-methods-when-no-configuration-file-exists", null ],
              [ "Using the Parameterless connect() Methods when no Configuration File exists", "md_README.html#using-the-parameterless-connect-methods-when-no-configuration-file-exists", null ]
            ] ],
            [ "Anatomy of the Command Line Interface", "md_README.html#anatomy-of-the-command-line-interface", null ]
          ] ],
          [ "Configuration via a Configuration File", "md_README.html#configuration-via-a-configuration-file", [
            [ "Configuration File Format", "md_README.html#configuration-file-format", null ],
            [ "Default Name of a Configuration File", "md_README.html#default-name-of-a-configuration-file", null ],
            [ "Default Location of Configuration Files", "md_README.html#default-location-of-configuration-files", null ]
          ] ]
        ] ],
        [ "Important Configuration Sections", "md_README.html#important-configuration-sections", [
          [ "SSL/TLS Configuration (Section tls)", "md_README.html#ssltls-configuration-section-tls", [
            [ "SSL/TLS In-Code Configuration", "md_README.html#ssltls-in-code-configuration", null ],
            [ "SSL/TLS Command Line Configuration", "md_README.html#ssltls-command-line-configuration", null ],
            [ "Using SSL/TLS with Other Network Layers", "md_README.html#using-ssltls-with-other-network-layers", null ]
          ] ],
          [ "Socket Configuration (Section socket)", "md_README.html#socket-configuration-section-socket", [
            [ "Common socket Options for SocketServer and SocketClient Instances", "md_README.html#common-socket-options-for-socketserver-and-socketclient-instances", null ],
            [ "Specific socket Options for IPv4 and IPv6 SocketServer", "md_README.html#specific-socket-options-for-ipv4-and-ipv6-socketserver", null ],
            [ "Specific socket Options for IPv6 SocketServer and SocketClient", "md_README.html#specific-socket-options-for-ipv6-socketserver-and-socketclient", null ]
          ] ]
        ] ]
      ] ],
      [ "Using More Than One Instance in an Application", "md_README.html#using-more-than-one-instance-in-an-application", null ],
      [ "Application Leyer Protocols APIs", "md_README.html#application-leyer-protocols-apis", [
        [ "Basic HTTP-Server and HTTP-Client API", "md_README.html#basic-http-server-and-http-client-api", null ],
        [ "Highlevel WEB-API a'la Node.JS-Express", "md_README.html#highlevel-web-api-ala-nodejs-express", null ],
        [ "WebSockets", "md_README.html#websockets", null ],
        [ "Basic MQTT-Server and MQTT-Client API", "md_README.html#basic-mqtt-server-and-mqtt-client-api", null ],
        [ "MQTT Over WebSocket", "md_README.html#mqtt-over-websocket", null ]
      ] ],
      [ "Database Support", "md_README.html#database-support", [
        [ "MariaDB", "md_README.html#mariadb", null ]
      ] ],
      [ "Example Applications", "md_README.html#example-applications", [
        [ "HTTP/S Web-Server for Static HTML-Pages", "md_README.html#https-web-server-for-static-html-pages", null ],
        [ "Receive Data via HTTP-Post Request", "md_README.html#receive-data-via-http-post-request", null ],
        [ "Extract Server and Client Information (host name, IP, port, SSL/TLS information)", "md_README.html#extract-server-and-client-information-host-name-ip-port-ssltls-information", null ],
        [ "Using Regular Expressions in Routes", "md_README.html#using-regular-expressions-in-routes", null ]
      ] ]
    ] ],
    [ "Vue 3 + TypeScript + Vite", "md_src_2apps_2oauth2_2authorization__server_2vue-frontend-oauth2-auth-server_2README.html", [
      [ "Recommended IDE Setup", "md_src_2apps_2oauth2_2authorization__server_2vue-frontend-oauth2-auth-server_2README.html#recommended-ide-setup", null ],
      [ "Type Support For .vue Imports in TS", "md_src_2apps_2oauth2_2authorization__server_2vue-frontend-oauth2-auth-server_2README.html#type-support-for-vue-imports-in-ts", null ]
    ] ],
    [ "Vue 3 + TypeScript + Vite", "md_src_2apps_2oauth2_2client__app_2vue-frontend-oauth2-client_2README.html", [
      [ "Recommended IDE Setup", "md_src_2apps_2oauth2_2client__app_2vue-frontend-oauth2-client_2README.html#recommended-ide-setup-1", null ],
      [ "Type Support For .vue Imports in TS", "md_src_2apps_2oauth2_2client__app_2vue-frontend-oauth2-client_2README.html#type-support-for-vue-imports-in-ts-1", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AcceptEventReceiver_8cpp.html",
"ConfigAddressRemote_8h_source.html",
"Logger_8h.html#a20a7b04657c1d83fae5d54514d3f1622ac70d7b5a6ca66e8ba0f1d5f528515573",
"SocketConnection_8cpp_source.html",
"classApp.html#a3a7043187d98d0587b3c19bd057f0208",
"classCLI_1_1CallForWriteConfig.html",
"classOption.html#ac35336af499c1e262d8d1bdfb3070c39",
"classapps_1_1echo_1_1model_1_1EchoSocketContext.html#aff211343268758bb0f913638ad346d9a",
"classcore_1_1EventLoop.html#a3125b6361565df4753affc73eb83984a",
"classcore_1_1TimerEventReceiver.html#a52b86119e9c36bf5e736eb8db5d93cbf",
"classcore_1_1multiplexer_1_1select_1_1DescriptorEventPublisher.html",
"classcore_1_1socket_1_1SocketContext.html#a8d1afe2d77ed45796d57da529e5c7c51",
"classcore_1_1socket_1_1stream_1_1SocketConnectionT.html#ac5ea3c3614aa8f5e8d9f20fbaae658c7",
"classcore_1_1socket_1_1stream_1_1legacy_1_1SocketAcceptor.html",
"classcore_1_1timer_1_1IntervalTimerStopable.html#a440eff104d7468a2069d4657a56baf71",
"classdatabase_1_1mariadb_1_1commands_1_1async_1_1MariaDBAutoCommitCommand.html#ad9234d2e6bb8383c03c93b680631cf74",
"classexpress_1_1Controller.html#a4321dde8dd3ffba0a558ab40655361a3",
"classexpress_1_1RootRoute.html#a60d0b64d29e93ed93bfe4f7d2ae703da",
"classexpress_1_1Router.html#a2cda8ea5c05bda23d3e9ef3f90002064",
"classexpress_1_1middleware_1_1BasicAuthentication.html#a461f08f2de85ee8ddb1afb72db149028",
"classiot_1_1mqtt_1_1Mqtt.html#ac724b5224b3fd33fc03485589bf726d7",
"classiot_1_1mqtt_1_1client_1_1packets_1_1Connack.html",
"classiot_1_1mqtt_1_1packets_1_1Pubrec.html#a51652fa56faa052cf14563e325f41eac",
"classiot_1_1mqtt_1_1server_1_1broker_1_1Broker.html#a3553d147a922d1c324c350b11eabe36b",
"classiot_1_1mqtt_1_1server_1_1packets_1_1Pubrec.html",
"classiot_1_1mqtt_1_1types_1_1UInt8.html#aefd53b172bd3dc7845ab176064aac489",
"classiot_1_1mqtt__fast_1_1packets_1_1Connect.html#a1f624c1f57711e5fa066ceeb01518352",
"classiot_1_1mqtt__fast_1_1types_1_1Int__1.html",
"classnet_1_1config_1_1ConfigPhysicalSocket.html#a4c40ecb1e1ccdb7395de93e7180b54b4",
"classnet_1_1config_1_1ConfigTlsServer.html",
"classnet_1_1in6_1_1stream_1_1SocketClient.html#a004a41e3e1af0ce3a4d2e98e11c744f2",
"classnet_1_1in_1_1stream_1_1SocketServer.html#a06f4d2094cb923ddab692a94acc05180",
"classnet_1_1phy_1_1PhysicalSocket.html#ab1b7a1e8f568d6f37b5712a43c126d20",
"classnet_1_1un_1_1SocketAddress.html#a642b5904081eae12c546ad22f81022a9",
"classutils_1_1Daemon.html#a6e5053c3e51d4ec8ccf5dea33af6e5bb",
"classweb_1_1http_1_1Parser.html#a94ab44c0d65451be6ba3e6e389a8b7d5a75c6b2428da2036422b35ca9b1f1f8c4",
"classweb_1_1http_1_1client_1_1Request.html#a50ba7d86e412656cc53f9ec143c19b11",
"classweb_1_1http_1_1client_1_1SocketContextFactory.html",
"classweb_1_1http_1_1decoder_1_1Identity.html#aea40755959c5296190b3e708fd9697b5",
"classweb_1_1http_1_1server_1_1SocketContextUpgradeFactory.html#a348a57d1159434207c8f0b328dc7b295",
"classweb_1_1websocket_1_1SubProtocol.html#afc5f714978cd4db140b6f54832b52cef",
"classweb_1_1websocket_1_1server_1_1SocketContextUpgrade.html#ad42e5970216aaaca64c94536d4a8f23f",
"dir_c3cffaf4d71f5a96172036273210621c.html",
"http_2server_2SocketContextUpgradeFactory_8cpp_source.html",
"l2_2stream_2legacy_2SocketClient_8cpp_source.html",
"mqtt-fast_2packets_2Disconnect_8cpp.html",
"multiplexer_2epoll_2EventMultiplexer_8cpp_source.html",
"namespacedetail.html#a89f81a352d3ebced093b357a351bd445",
"namespaceweb_1_1http.html#a40edb0fffda79adf1a8a5b95fdd6e7b2",
"rc_2stream_2tls_2config_2ConfigSocketClient_8h_source.html",
"structdetail_1_1element__type.html",
"tls_2rc_2WebApp_8h_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';