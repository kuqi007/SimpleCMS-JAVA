Ext.define('SimpleCMS.view.authentication.Login', {
    extend: 'SimpleCMS.view.authentication.LockingWindow',
    xtype: 'login',

    requires: [
        'SimpleCMS.view.authentication.Dialog',
        'Ext.container.Container',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',
        'Ext.Img'
    ],

    title: AppLocale.LoginTitle,
    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            defaultButton : 'loginButton',
            autoComplete: true,
            bodyPadding: '20 20',
            cls: 'auth-dialog-login',
            header: false,
            width: 415,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            defaults : {
                margin : '5 0'
            },

            items: [
                {
                    xtype: 'label',
                    text: AppLocale.LoginLabel
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    name: 'UserName',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: AppLocale.UserId,
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    emptyText: AppLocale.Password,
                    inputType: 'password',
                    name: 'Password',
                    bind: '{password}',
                    allowBlank : false,
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-password-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    name: 'VerifyCode',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    maxLength: 6,
                    minLength: 6,
                    emptyText: AppLocale.VerifyCode,
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-verifycode-trigger'
                        }
                    }
                },
                {
                    xtype: 'image',
                    height: 55,
                    src: '',
                    title: AppLocale.VerifyCodeAlt,
                    alt: AppLocale.VerifyCodeAlt,
                    style: 'cursor:pointer',
                    listeners: {
                        click: {
                            fn: 'onRefrestVcode',
                            element: 'el'
                        }
                    }
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'checkboxfield',
                            flex : 1,
                            cls: 'form-panel-font-color rememberMeCheckbox',
                            height: 30,
                            name: 'RememberMe',
                            boxLabel: AppLocale.RememberMe
                        }
                    ]
                },
                {
                    xtype: 'button',
                    reference: 'loginButton',
                    scale: 'large',
                    ui: 'soft-green',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: AppLocale.LoginTitle,
                    formBind: true,
                    listeners: {
                        click: 'onLoginButton'
                    }
                }
            ]
        }
    ],

    initComponent: function() {
        this.addCls('user-login-register-container');
        this.callParent(arguments);
    },

    listeners: {
        show: 'onLoginViewShow'
    }

});
