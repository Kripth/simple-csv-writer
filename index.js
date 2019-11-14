module.exports = (data, options = {}) => {
	const separator = options.separator || ",";
	const mapper = options.mapper || (value => value + "");
	return data.map(line => line.map(value => {
			value = mapper(value);
			const contains = char => value.indexOf(char) !== -1;
			if(contains("\"")) {
				return `"${value.replace(/"/g, "\"\"")}"`;
			} else if(contains(separator) || contains("\n")) {
				return `"${value}"`;
			} else {
				return value;
			}
		}).join(separator))
		.join(options.newLine || "\r\n");
};
