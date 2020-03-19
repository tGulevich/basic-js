module.exports = class DepthCalculator {

    calculateDepth(arr) {
        console.log(arr);
        let level = 0;

        arr.forEach(el => {
            if (Array.isArray(el)) {
                let next = this.calculateDepth(el);
                if (level < next) {
                    level = next;
                } 
            } 
        });

        return ++level;
    }
};

