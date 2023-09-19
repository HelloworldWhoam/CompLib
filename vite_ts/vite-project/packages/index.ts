import {App ,Plugin} from "vue";
import {ButtonPlugin} from "./Button";

//封装成插件
const YuzPlugin:Plugin={
    install(app:App){
        ButtonPlugin.install?.(app);
    }
};

export default YuzPlugin;
export * from './Button'