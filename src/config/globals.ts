import { User } from "@models/user";
import messages from "@config/constants/messages";
import config from "@config/config";

export const App = {
    Model : {
        User,
    },
    messages,
    config
}