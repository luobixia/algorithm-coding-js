# 常见的排序算法  
   * [冒泡排序](#冒泡排序)   
   * [插入排序](#插入排序)   
   * [选择排序](#选择排序)  
   * [堆排序](#堆排序)



## 冒泡排序   
![冒泡动画演示](https://img-blog.csdnimg.cn/20191104102654968.gif)  

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


### 复杂度
时间复杂度：`O(n2)`

空间复杂度:`O(1)`

### 稳定性
稳定  
  
## 插入排序  

![](https://upload-images.jianshu.io/upload_images/1867034-d1537e355abdd298.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/811/format/webp)  

### 思想

将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。

插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。

### 解法

    function insertSort(array) {
      for (let i = 1; i < array.length; i++) {//i=1是因为从前两个开始比较，通过i循环每次多加一个元素
        let target = i;
        for (let j = i - 1; j >= 0; j--) {//j控制已经排好序，插入一个元素再循环，从头到尾再次排序，通过j--来进行一个一个的比较大小
          if (array[target] < array[j]) {
            [array[target], array[j]] = [array[j], array[target]]
            target = j;
          } else {
            break;
          }
        }
      }
      return array;
    }

### 复杂度

时间复杂度：`O(n2)`

空间复杂度:`O(1)`

### 稳定性

稳定

## 选择排序  

![](https://upload-images.jianshu.io/upload_images/1867034-c6cc220cfb2b9ac8.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/811/format/webp)  

### 思想

每次循环选取一个最小的数字放到前面的有序序列中。



### 解法

    function selectionSort(array) {
      for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {//每选定一个最小元素，都要走一遍数组循环，控制循环开始的地方j=i+1，i之前是已经排好顺序的元素
          if (array[j] < array[minIndex]) {
            minIndex = j;
          }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]];//将目前的循环的最小值放到第i个位置，i之前是排好顺序的元素
      }
    }

### 复杂度

时间复杂度：`O(n2)`

空间复杂度:`O(1)`

### 稳定性

不稳定  
## 推排序  
![推排序](https://mmbiz.qpic.cn/mmbiz_gif/D67peceibeISwc3aGibUlvZ0XqVnbWtBRian1jgiaGZE9k1xZTp9B1icHia0jIXiba3ibgnIBibdfSN4I5US4WtrQJQMiakw/640?wx_fmt=gif)  

### 思想

创建一个大顶堆，大顶堆的堆顶一定是最大的元素。

交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。

从后往前以此和第一个元素交换并重新构建，排序完成。


### 解法

    function heapSort(array) {
      creatHeap(array);
      console.log(array);
      // 交换第一个和最后一个元素，然后重新调整大顶堆
      for (let i = array.length - 1; i > 0; i--) {
        [array[i], array[0]] = [array[0], array[i]];
        adjust(array, 0, i);
      }
      return array;
    }
    // 构建大顶堆，从第一个非叶子节点开始，进行下沉操作
    function creatHeap(array) {
      const len = array.length;
      const start = parseInt(len / 2) - 1;
      for (let i = start; i >= 0; i--) {
        adjust(array, i, len);
      }
    }
    // 将第target个元素进行下沉，孩子节点有比他大的就下沉
    function adjust(array, target, len) {
      for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
        // 找到孩子节点中最大的
        if (i + 1 < len && array[i + 1] > array[i]) {
          i = i + 1;
        }
        // 下沉
        if (array[i] > array[target]) {
          [array[i], array[target]] = [array[target], array[i]]
          target = i;
        } else {
          break;
        }
      }
    }



### 复杂度

时间复杂度：`O(nlogn)`

空间复杂度:`O(1)`


### 稳定性

不稳定








