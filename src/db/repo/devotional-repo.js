module.exports = {
    async create(repo, payload) {
        let result;

        try {
            result = await repo.create(payload);
        } catch (err) {
            console.log(`Error: ${err}`)
        }

        return result;
    },
    async getTodayDevotional(repo, todayDate) {
        let result;
        try {
            result = await repo.findOne({ 'date': todayDate })
        } catch (err) {
            console.log(`ERROR: ${err}`)
        }

        return result;
    }
}