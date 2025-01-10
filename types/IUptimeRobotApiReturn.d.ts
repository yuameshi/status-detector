interface IUptimeRobotApiReturn {
	stat: string;
	pagination: Pagination;
	monitors: Monitor[];
}

export interface Pagination {
	offset: number;
	limit: number;
	total: number;
}

export interface Monitor {
	id: number;
	friendly_name: string;
	url: string;
	type: number;
	sub_type: string;
	keyword_type: any;
	keyword_case_type: any;
	keyword_value: string;
	http_username: string;
	http_password: string;
	port: string;
	interval: number;
	timeout: number;
	status: number;
	create_datetime: number;
	logs: Log[];
	custom_uptime_ranges: string;
	lastLogTypeBeforeStartDate: LastLogTypeBeforeStartDate;
}

export interface Log {
	id: number;
	type: number;
	datetime: number;
	duration: number;
	reason: Reason;
}

export interface Reason {
	code: string;
	detail: string;
}

export interface LastLogTypeBeforeStartDate {
	id: number;
	type: number;
	datetime: number;
	duration: number;
	reason: Reason2;
}

export interface Reason2 {
	code: string;
	detail: string;
}
