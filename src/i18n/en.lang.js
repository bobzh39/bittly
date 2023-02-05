module.exports = {
    /**
     * translation for directive module
     * @property {Object}
     */
    directive : require('@/modules/directive/i18n/en.lang.js'),
    /**
     * translation for module panel
     * @property {Object}
     */
    panel : require('@/modules/panel/i18n/en.lang.js'),
    /**
     * translation for module mock 
     * @property {Object}
     */
    mock : require('@/modules/mock/i18n/en.lang.js'),

    test : require('@/modules/test/i18n/en.lang.js'),
    document : require('@/modules/document/i18n/en.lang.js'),
    environment : require('@/modules/environment/i18n/en.lang.js'),
    project : require('@/modules/project/i18n/en.lang.js'),
    plugin : require('@/modules/plugin/i18n/en.lang.js'),
    app : {
        initLoadingStepDatabaseSetup : 'Setup Database',
        initLoadingStepServerSetup : 'Setup Server',
        initLoadingStepI18nSetup : 'Setup I18n',
        initLoadingStepDirectionarySetup : 'Loading Directionary',
        initLoadingPlugins : 'Loading Plugins',
        actionRecorderTitle : 'UI Test Script Generator',
        actionRecorderDesc : 'UI test script generator use to generate test script for bittly, if you found a bug, you can use it to record actions to show how it happend.',
        browserTip : 'Because of the limitation of browser, there would be some action not available ~~~ You can download bittly and use it without limiation.',
        browserDownloadClient : 'Download Bittly',
        browserOpenDevTools : 'you can open dev tools by browser menu ~~~ ',
        environmentNotSupportAction : 'Current environment does not support this action',
        environmentBrowserNotSupport : 'Bittly online version only available on chrome ~~~ ',
        environmentCheckFailed : 'Runtime environment check failed',

        about : 'About',
        quitConfirm : 'Are you sure to exit the app ?',
        device : {
            infoTitle : 'Device Information',
            dataTrans : 'Data Transmission',
            dataTransSend : 'Send',
            dataTransReceive : 'Receive',
            disconnectMessage : 'Are you sure you want to disconnect this device ?',
        },
        setting : {
            title : 'Setting',
            language : 'Language',
        },
        update: {
            title : 'Update',
            checkingForUpdate : 'Checking for update ...',
            error : 'Update failed .',
            newpackAvailable : 'Update available',
            newpackInfo : 'Version : {version} Release Time : {time}',
            releaseNote : 'Release Note',
            downloaded : 'Downloaded',
            noUpdateAvailable : 'No Update Available',
            restartToApplyUpdate : 'Restart to apply update',
            modalTitle : 'Update Note',
            version : 'Version',
            packTime : 'Pack Time',
            description : 'Description',
            btnIgnoreThisUpdate : 'Ignore this version',
            btnUpdate : 'Update',
            publishTime : 'Publish Time',
        },
        menu : {
            file : {
                label : 'File',
                refresh : 'Refresh',
                opendevtool : 'Open DevTools',
                alwaysOnTopEnable : 'Enable Always On Top',
                alwaysOnTopDisable : 'Disable Always On Top',
                exit:'Exit',
            },
            setting : 'Setting',
            tool : {
                serialportServer : 'Serialport Server',
                label : 'Tool',
                tcpServer : 'TCP Server',
                udpServer : 'UDP Server',
                terminal : 'Terminal',
                calculator : 'Calculators',
                wsServer : 'Web Socket Server',
            },
            help : {
                label : 'Help',
                getStart : 'Get Start',
                update : 'Update',
                about : 'About',
                feedback : 'Feedback',
                actionRecord : 'Action Record',
            }
        },
        tool : {
            regexIsNotAvailable : 'Unable to parser regex pattern : {0}',
            scriptExecuteFailed : 'Failed to execute script : {0}',
            responseHandler : 'Response',
            responseHandlerMoveForward : 'Move Forward',
            responseHandlerMoveBack : 'Move Back',
            responseHandlerOrder : 'Response Order',
            responseHandlerManual : 'Manual',
            responseHandlerEcho : 'Echo',
            responseHandlerRandom : 'Random',
            responseHandlerScript : 'Script',
            responseHandlerMatch : 'Match',
            responseHandlerMatchColStatus : 'Status',
            responseHandlerMatchColMode : 'Mode',
            responseHandlerMatchColNote : 'Note',
            responseHandlerMatchColTemplate : 'Template',
            responseHandlerMatchColResponse : 'Response',
            responseHandlerMatchColResponseEditorTitle : 'Response Content Edit',
            responseHandlerMatchColOperations : 'Operations',
            viewerMode : 'Viewer Mode',
            dataViewerMergeRecentlyReceiveData : 'Merge Data',
            transDataSize : 'Data Size',
        },
        toolSerialPortServer : require('../tools/serialport-server/i18n/en.lang.js'),
        toolCalculator : {
            windowTitle : 'Calculators',
            colorRingResistanceValue : 'Color Ring Resistance Value',
            colorRingResistanceValueValue : 'Value',
            colorRingResistanceValueErrorRange : 'Error Range',
            dataValidation : 'Data Validation',
            dataValidationParityChecking : 'Parity Checking',
            dataValidationEvenParityChecking : 'Even Parity Checking',
            dataValidationOddParityChecking : 'Odd Parity Checking',
            dataValidationSumCheck : 'Sum Check',
        },
        toolTerminal : {
            windowTitle : 'Terminal',
            connectionOpenFailed : 'Failed to open connection',
        },
        toolTcpServer : {
            windowTitle : 'TCP Server',
            serverStarted : 'Server has been started',
            serverStoped : 'Server has been stoped',
            btnStart : 'Start',
            btnStop : 'Stop',
            noClients : 'No Client',
            noData : 'No Data',
            btnCleanInput : 'Clear Input',
            btnCleanViewer : 'Clear Viewer',
            dataFormat : {
                text : 'String',
                hex : 'Hex',
            },
        },
        toolUdpServer : {
            windowTitle : 'UDP Server',
            serverStarted : 'Server has been started',
            serverStoped : 'Server has been stoped',
            btnStart : 'Start',
            btnStop : 'Stop',
            noClients : 'No Client',
            noData : 'No Data',
            btnCleanInput : 'Clear Input',
            btnCleanViewer : 'Clear Viewer',
            dataFormat : {
                text : 'String',
                hex : 'Hex',
            },
        },
        toolWsServer : require('../tools/ws-server/i18n/en.lang.js'),
        errorHandler : {
            title : 'Error',
            reportTip : 'Em ~~~ SO SORRY ! There is something wrong about this app, you can report this by following, I will fix it as soon as possible !  ＞﹏＜',
            errorIgnore : 'Ignore',
        },
        feedback : {
            title : 'Feedback',
            textMessageInputPlaceholder : 'Please input message content, press enter to send',
            messageSendFailed : 'Failed to send message : {0}',
            messagePullFailed : 'Failed to pull message : {0}',
            messageSendFailedEmpty : 'Empty message can not be send',
            imageFileSelectFilterName : 'Image',
            imageOpenFailed : 'Faile to open image',
        }
    },
    user : {
        loginOrRegister : 'Login / Register',
        logout : 'Logout',
        login : 'Login',
        loginByAccountOrEmail : 'Email / Account',
        password : 'Password',
        forgetPassword : 'Forget Password',
        register : 'Register',
        account : 'Account',
        email : 'Email',
        sendEmailVerifyCode : 'Send Verfication Code',
        emailVerifyCode : 'Email Verfication Code',
        passwordReset : 'Reset Password',
        newPassword : 'New Password',
        accountOnlySupportNumberAndLettersAlsoStartWithLetters : 'Letters and numbers only, and start with an letter',
        accountLengthBetween4And16Chars : '4 ~ 16 characters',
        emailVerifyCodeIsFourNumbers : '4 number characters only',
        passwordLengthBetween6And32Chars : '6 ~ 32 characters',
        accountAlreadyExists : 'Already exists',
        emailAlreadExists : 'Already exists',
        emailSendFailed : 'Email failed to send',
        emailSendAndAvailableIn10Mins : 'Email has been send, and verfication code available in 10 minutes.',
        registerSuccess : 'Register success',
        passwordResetSuccess : 'Reset password success',
        passwordResetFailed : 'Reset password failed',
        loginFailed : 'Login failed',
        loginSuccess : 'Login success',
        logoutSuccess : 'Logouted',
    },
    button : {
        save : 'Save',
        ok : 'OK',
        cancel : 'Cancel',
        refresh : 'Refresh',
        newFolder : 'New Folder',
        search : 'Search',
        rename : 'Rename',
        delete : 'Delete',
        copy : 'Copy',
        send : 'Send',
        add : 'Add',
        operations : 'Operations',
        create : 'Create',
        execute : 'Execute',
        yes : 'YES',
        no : 'NO',
        connect:'Connect',
        disconnect : 'Disconnect',
        install : 'Install',
        apply : 'Apply',
        close : 'Close',
        edit : 'Edit',
        export : 'Export',
        setting : 'Setting',
        clearAll : 'Clear All',
        start : 'Start',
        stop : 'Stop',
    },
    messages : {
        dialogTitle : {
            tip : 'Tip',
            error : 'Error',
        },
        untitled : 'Untitled',
        note : 'Note',
        fileSaveSuccess : 'File saved.',
        saveSuccess : 'Saved successfully.',
        saveFailed : 'Save failed.',
        example : 'Example',
        exampleContent : 'Example : {0}',
        cannotBeEmpty : 'Can not be empty',
        formatError : 'Format error',
        tip : 'Tip',
        send : 'Send',
        receive : 'Receive',
        disable : 'Disable',
        enable : 'Enable',
        stringToHexIllegalChars : 'Failed to convert string "{0}" to hex : illegal chars been found',
    },
    unit : {
        second : 'sec(s)',
    },
};