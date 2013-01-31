function (doc) {
	if (doc.type.substr(0,6) === "spirit") {
		emit(doc._id, {
		"_id": doc._id,
		"_rev": doc._rev,
		"spiritName": doc.spiritName,
		"quantity": doc.quantity,
		"bottleMIL": doc.bottleMIL,
		"date": doc.date,
		"shelve": doc.shelve,
		"family": doc.family
		});
	}
};