function isNullOrUndefined ( p1 )  {
    if (p1 === undefined || p1 === null) {
	return(true);
    }
    else {
	return(false);
    }
}

module.exports = { isNullOrUndefined  };