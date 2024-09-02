class AppError extends Error {
	constructor(message?: string) {
		super(message || "App Error");
		this.name = "app_error";
	}
}

export default AppError;
