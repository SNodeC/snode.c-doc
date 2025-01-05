var index =
[
    [ "Table of Content", "index.html#table-of-content", null ],
    [ "License", "index.html#license", null ],
    [ "Copyright", "index.html#copyright", null ],
    [ "Quick Starting Guide", "index.html#quick-starting-guide", [
      [ "An \"Echo\" Application", "index.html#an-echo-application", [
        [ "SocketServer and SocketClient Instances", "index.html#socketserver-and-socketclient-instances", null ],
        [ "SocketContextFactory Classes", "index.html#socketcontextfactory-classes", [
          [ "Echo-Server SocketContextFactory", "index.html#echo-server-socketcontextfactory", null ],
          [ "Echo-Client SocketContextFactory", "index.html#echo-client-socketcontextfactory", null ]
        ] ],
        [ "SocketContext Classes", "index.html#socketcontext-classes", [
          [ "Echo-Server SocketContext", "index.html#echo-server-socketcontext", null ],
          [ "Echo-Client SocketContext", "index.html#echo-client-socketcontext", null ]
        ] ],
        [ "Main Applications for Server and Client", "index.html#main-applications-for-server-and-client", [
          [ "Echo-Server Main Application", "index.html#echo-server-main-application", null ],
          [ "Echo-Client Main Application", "index.html#echo-client-main-application", null ]
        ] ],
        [ "CMakeLists.txt file for Building and Installing our echoserver and echoclient", "index.html#cmakeliststxt-file-for-building-and-installing-our-echoserver-and-echoclient", null ]
      ] ],
      [ "Summary", "index.html#summary", null ]
    ] ],
    [ "Installation", "index.html#installation", [
      [ "Supported Systems and Hardware", "index.html#supported-systems-and-hardware", null ],
      [ "Minimum required Compiler Versions", "index.html#minimum-required-compiler-versions", null ],
      [ "Requirements and Dependencies", "index.html#requirements-and-dependencies", [
        [ "Tools", "index.html#tools", [
          [ "Mandatory", "index.html#mandatory", null ],
          [ "Optional", "index.html#optional", null ]
        ] ],
        [ "Libraries", "index.html#libraries", [
          [ "Mandatory", "index.html#mandatory-1", null ],
          [ "Optional", "index.html#optional-1", null ],
          [ "In-Framework", "index.html#in-framework", null ]
        ] ]
      ] ],
      [ "Installation on Debian Style Systems (x86-64, Arm)", "index.html#installation-on-debian-style-systems-x86-64-arm", [
        [ "Requirements and Dependencies", "index.html#requirements-and-dependencies-1", null ],
        [ "SNode.C", "index.html#snodec", null ]
      ] ],
      [ "Deploment on OpenWRT", "index.html#deploment-on-openwrt", [
        [ "Choose and Download a SDK", "index.html#choose-and-download-a-sdk", null ],
        [ "Patch the SDK to Integrate the SNode.C Feed", "index.html#patch-the-sdk-to-integrate-the-snodec-feed", null ],
        [ "Install the SNode.C Package and its Dependencies", "index.html#install-the-snodec-package-and-its-dependencies", null ],
        [ "Configure the SDK", "index.html#configure-the-sdk", null ],
        [ "Cross Compile SNode.C", "index.html#cross-compile-snodec", null ],
        [ "Deploy SNode.C", "index.html#deploy-snodec", null ]
      ] ]
    ] ],
    [ "Design Decisions and Features", "index.html#design-decisions-and-features", null ],
    [ "Fundamental Architecture", "index.html#fundamental-architecture", [
      [ "Network Layer", "index.html#network-layer", null ],
      [ "Transport Layer", "index.html#transport-layer", null ],
      [ "Connection Layer", "index.html#connection-layer", null ],
      [ "Application Layer", "index.html#application-layer", null ]
    ] ],
    [ "Existing SocketServer and SocketClient Classes", "index.html#existing-socketserver-and-socketclient-classes", [
      [ "Common Aspects of SocketServer and SocketClient Classes", "index.html#common-aspects-of-socketserver-and-socketclient-classes", [
        [ "SocketAddress", "index.html#socketaddress", [
          [ "SocketAddress Constructors", "index.html#socketaddress-constructors", null ]
        ] ],
        [ "SocketConnection", "index.html#socketconnection", [
          [ "Most Important common SocketConnection Methods", "index.html#most-important-common-socketconnection-methods", null ]
        ] ],
        [ "Constructors of SocketServer and SocketClient Classes", "index.html#constructors-of-socketserver-and-socketclient-classes", [
          [ "All Constructors of SocketServer Classes", "index.html#all-constructors-of-socketserver-classes", null ],
          [ "All Constructors of SocketClient Classes", "index.html#all-constructors-of-socketclient-classes", null ]
        ] ],
        [ "Constructor Callbacks", "index.html#constructor-callbacks", [
          [ "The onConnect Callback", "index.html#the-onconnect-callback", null ],
          [ "The onConnected Callback", "index.html#the-onconnected-callback", null ],
          [ "The onDisconnected Callback", "index.html#the-ondisconnected-callback", null ],
          [ "Attaching the Callbacks during Instance Creation", "index.html#attaching-the-callbacks-during-instance-creation", null ],
          [ "Attaching the Callbacks to already existing Instances", "index.html#attaching-the-callbacks-to-already-existing-instances", null ]
        ] ]
      ] ],
      [ "SocketServer Classes", "index.html#socketserver-classes", [
        [ "SocketServer Header Files", "index.html#socketserver-header-files", null ],
        [ "Listen Methods", "index.html#listen-methods", [
          [ "SocketAddress Types", "index.html#socketaddress-types", null ],
          [ "The core::socket::State Object", "index.html#the-coresocketstate-object", null ],
          [ "Common listen() Methods", "index.html#common-listen-methods", null ],
          [ "IPv4 specific listen() Methods", "index.html#ipv4-specific-listen-methods", null ],
          [ "IPv6 specific listen() Methods", "index.html#ipv6-specific-listen-methods", null ],
          [ "Unix Domain Socket specific listen() Methods", "index.html#unix-domain-socket-specific-listen-methods", null ],
          [ "Bluetooth RFCOMM specific listen() Methods", "index.html#bluetooth-rfcomm-specific-listen-methods", null ],
          [ "Bluetooth L2CAP specific listen() Methods", "index.html#bluetooth-l2cap-specific-listen-methods", null ]
        ] ]
      ] ],
      [ "SocketClient Classes", "index.html#socketclient-classes", [
        [ "SocketClient Header Files", "index.html#socketclient-header-files", null ],
        [ "Connect Methods", "index.html#connect-methods", [
          [ "SocketAddress Types", "index.html#socketaddress-types-1", null ],
          [ "The core::socket::State Object", "index.html#the-coresocketstate-object-1", null ],
          [ "Common connect() Methods", "index.html#common-connect-methods", null ],
          [ "IPv4 specific connect() Methods", "index.html#ipv4-specific-connect-methods", null ],
          [ "IPv6 specific connect() Methods", "index.html#ipv6-specific-connect-methods", null ],
          [ "Unix Domain Socket specific connect() Methods", "index.html#unix-domain-socket-specific-connect-methods", null ],
          [ "Bluetooth RFCOMM specific connect() Methods", "index.html#bluetooth-rfcomm-specific-connect-methods", null ],
          [ "Bluetooth L2CAP specific connect() Methods", "index.html#bluetooth-l2cap-specific-connect-methods", null ]
        ] ]
      ] ]
    ] ],
    [ "Configuration", "index.html#configuration", [
      [ "Three different Options for Configuration", "index.html#three-different-options-for-configuration", [
        [ "Configuration using the C++ API", "index.html#configuration-using-the-c-api", [
          [ "List of all Configuration Items", "index.html#list-of-all-configuration-items", null ]
        ] ],
        [ "Configuration via the Command Line", "index.html#configuration-via-the-command-line", [
          [ "Application Configuration", "index.html#application-configuration", null ],
          [ "Instance Configuration", "index.html#instance-configuration", [
            [ "Sections", "index.html#sections", null ],
            [ "Using the Parameterless listen() Methods when no Configuration File exists", "index.html#using-the-parameterless-listen-methods-when-no-configuration-file-exists", null ],
            [ "Using the Parameterless connect() Methods when no Configuration File exists", "index.html#using-the-parameterless-connect-methods-when-no-configuration-file-exists", null ]
          ] ],
          [ "Anatomy of the Command Line Interface", "index.html#anatomy-of-the-command-line-interface", null ]
        ] ],
        [ "Configuration via a Configuration File", "index.html#configuration-via-a-configuration-file", [
          [ "Configuration File Format", "index.html#configuration-file-format", null ],
          [ "Default Name of a Configuration File", "index.html#default-name-of-a-configuration-file", null ],
          [ "Default Location of Configuration Files", "index.html#default-location-of-configuration-files", null ]
        ] ]
      ] ],
      [ "Important Configuration Sections", "index.html#important-configuration-sections", [
        [ "SSL/TLS Configuration (Section tls)", "index.html#ssltls-configuration-section-tls", [
          [ "SSL/TLS In-Code Configuration", "index.html#ssltls-in-code-configuration", null ],
          [ "SSL/TLS Command Line Configuration", "index.html#ssltls-command-line-configuration", null ],
          [ "Using SSL/TLS with Other Network Layers", "index.html#using-ssltls-with-other-network-layers", null ]
        ] ],
        [ "Socket Configuration (Section socket)", "index.html#socket-configuration-section-socket", [
          [ "Common socket Options for SocketServer and SocketClient Instances", "index.html#common-socket-options-for-socketserver-and-socketclient-instances", null ],
          [ "Specific socket Options for IPv4 and IPv6 SocketServer", "index.html#specific-socket-options-for-ipv4-and-ipv6-socketserver", null ],
          [ "Specific socket Options for IPv6 SocketServer and SocketClient", "index.html#specific-socket-options-for-ipv6-socketserver-and-socketclient", null ]
        ] ]
      ] ]
    ] ],
    [ "Using More Than One Instance in an Application", "index.html#using-more-than-one-instance-in-an-application", null ],
    [ "Application Leyer Protocols APIs", "index.html#application-leyer-protocols-apis", [
      [ "Basic HTTP-Server and HTTP-Client API", "index.html#basic-http-server-and-http-client-api", null ],
      [ "Highlevel WEB-API a'la Node.JS-Express", "index.html#highlevel-web-api-ala-nodejs-express", null ],
      [ "WebSockets", "index.html#websockets", null ],
      [ "Basic MQTT-Server and MQTT-Client API", "index.html#basic-mqtt-server-and-mqtt-client-api", null ],
      [ "MQTT Over WebSocket", "index.html#mqtt-over-websocket", null ]
    ] ],
    [ "Database Support", "index.html#database-support", [
      [ "MariaDB", "index.html#mariadb", null ]
    ] ],
    [ "Example Applications", "index.html#example-applications", [
      [ "HTTP/S Web-Server for Static HTML-Pages", "index.html#https-web-server-for-static-html-pages", null ],
      [ "Receive Data via HTTP-Post Request", "index.html#receive-data-via-http-post-request", null ],
      [ "Extract Server and Client Information (host name, IP, port, SSL/TLS information)", "index.html#extract-server-and-client-information-host-name-ip-port-ssltls-information", null ],
      [ "Using Regular Expressions in Routes", "index.html#using-regular-expressions-in-routes", null ]
    ] ]
];