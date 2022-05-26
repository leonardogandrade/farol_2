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
    async getTodayDevotional(repo) {
        let result;
        let date = new Date();
        const cur_month = date.getMonth() + 1
        const month = cur_month.toString().padStart(2, '0');
        const current_date = `${date.getFullYear()}-${month}-${date.getDate()}`

        try {
            result = await repo.findOne({ 'date': current_date })
        } catch (err) {
            console.log(`ERROR: ${err}`)
        }

        return result;
    }
}