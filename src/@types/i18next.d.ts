// import the original type declarations
import "i18next";
import en from '@utils/language/json/en.json';
import id from '@utils/language/json/id.json';

declare module "i18next" {
    // and extend them!
    interface CustomTypeOptions {
        // custom namespace type if you changed it
        defaultNS: 'id';
        // custom resources type
        resources: {
            en: typeof en;
            id: typeof id;
        };
    }
}
