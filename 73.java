// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/
class Solution {
    public void setZeroes(int[][] matrix) {
        HashMap<Integer, Boolean> colsToZero = new HashMap();
        
        for(int i = 0; i < matrix.length; i++) {
            boolean hasZero = false;
            for(int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    hasZero = true;
                    colsToZero.put(j,true);
                }
            }
            if (hasZero) {
                for(int j = 0 ; j < matrix[i].length; j++) {
                    matrix[i][j] = 0;
                }
            }
        }
        for(Integer j : colsToZero.keySet()) {
            for(int i = 0; i < matrix.length; i++) {
                matrix[i][j] = 0;
            }
        }
    }
}