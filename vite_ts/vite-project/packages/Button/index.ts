import {App ,Plugin} from "vue";
import Button from "./src/Button.vue"

//封装成插件
 export const ButtonPlugin:Plugin={
    install(app:App){
        app.component("y-button",Button);
    }
 }

 export {Button};