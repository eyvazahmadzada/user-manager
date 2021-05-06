class Utils {
  /**
   * Sort and return an array
   *
   * @param {Array} [arr]
   * @param {keyof Object} [key]
   * @param {string} [order]
   * @returns {Array}
   */
  static sortArray(arr: any[], key: string, isAsc: boolean = true): any[] {
    const sortedArr = arr.sort((a, b) => {
      const keyA = a[key as keyof object];
      const keyB = b[key as keyof object];
      if (!isAsc) {
        return keyA < keyB ? 1 : keyA > keyB ? -1 : 0;
      }
      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });

    return sortedArr;
  }

  /**
   * Search array for a keyword and return elements
   *
   * @param {Array} [arr]
   * @param {string} [keyword]
   * @returns {Array}
   */
  static searchArray(arr: any[], keyword: string): any[] {
    if (keyword === '') {
      return arr;
    }
    const searchedArr = arr.filter((el) => {
      let containsKeyword = false;

      for (let key in el) {
        if (el[key].toString().includes(keyword)) containsKeyword = true;
      }
      return containsKeyword;
    });

    return searchedArr;
  }
}

export default Utils;
