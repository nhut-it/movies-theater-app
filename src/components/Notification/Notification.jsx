import { notification } from "antd";

export const NotifiFunction = (type, message, description) => {
	notification[type]({
		message: message,
		description: description,
	});
};
