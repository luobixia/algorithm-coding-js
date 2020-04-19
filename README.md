# 常见的排序算法  
   * [冒泡排序](#冒泡排序)   
   * [冒泡排序](#冒泡排序) 



## 冒泡排序   
![冒泡动画演示](./images/bubbleSort02.gif)  

### 思想  
- 比较当前元素和它的下一个元素，如果当前元素比下一个元素大，调换位置（向上冒泡）    

- 循环一次结束之后最后一个数组就是本数组中最大一个数  

- 继续上面的循环，不循环已经排序好的数   

优化：当一次循环没有发生冒泡，说明排序已经完成，停止循环    

### 解法  
    function bubbleSort(array) {
      for (let j = 0; j < array.length; j++) {
        let complete = true;
        for (let i = 0; i < array.length  - j - 1; i++) {//减j是因为不循环已经排序好的数,减1是因为j从0开始
          // 比较相邻数
          if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            complete = false;
          }
        }
        // 没有冒泡结束循环（当一次循环没有发生冒泡，说明已经排序完成，停止循环）
        if (complete) {
          break;
        }
      }
      return array;
    }


## 复杂度
时间复杂度：`O(n2)`

空间复杂度:`O(1)`

## 稳定性
稳定






