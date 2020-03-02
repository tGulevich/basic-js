module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
        throw Error; 
    } else {
        arr.forEach((el, i) => {
            if (el === '--double-prev') {
                if (arr[i-1] !== undefined) {
                    arr[i] = arr[i-1];
                } else {
                    arr.splice(i, 1);
                }
            } else if (el === '--double-next') {
                if (arr[i+1] !== undefined) {
                    arr[i] = arr[i+1];
                } else {
                    arr.splice(i, 1);
                }
            }
        });

        let next = arr.indexOf('--discard-next');
        let prev = arr.indexOf('--discard-prev');

        if (next >= 0 && prev >= 0) {
            if (next < prev ) {
                if (arr[next+1] !== undefined) {
                    arr.splice(next, 2);
                } else {
                    arr.splice(next, 1);
                }
            } else if (prev < next) {
                if (arr[prev-1] !== undefined) {
                    arr.splice(prev-1, 2);
                } else {
                    arr.splice(prev, 1);
                }
            }
        } else if (next >= 0 && prev === -1) {
            if (arr[next+1] !== undefined) {
                arr.splice(next, 2);
            } else {
                arr.splice(next, 1);
            }
        } else if(prev >= 0 && next === -1) {
            if (arr[prev-1] !== undefined) {
                arr.splice(prev-1, 2);
            } else {
                arr.splice(prev, 1);
            }
        }

        if (arr.indexOf('--discard-prev') === -1 && arr.indexOf('--discard-next') === -1) {
            return arr;
        } else {;
            transform(arr);
        }

        return arr;
    }
};