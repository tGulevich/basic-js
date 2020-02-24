module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = members.map(el => {
      if (typeof(el) === 'string') return el.trim().charAt(0).toUpperCase();
    })
    return arr.sort().join('');
  } else {
    return false;
  }
};