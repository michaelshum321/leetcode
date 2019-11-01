// 155. Min Stack
// https://leetcode.com/problems/min-stack/

// it works, but I am not proud of it
class MinStack {
    private LinkedList<Integer> stack;
    int min;
    /** initialize your data structure here. */
    public MinStack() {
        stack = new LinkedList();
    }
    private void setMin() {
        if (stack.size() == 0) {
            return;
        }
        this.min = stack.get(0);
        for(Integer val : stack) {
            if (min > val) {
                this.min = val;
            }
        }
    }
    public void push(int x) {
        stack.add(x);
        setMin();
    }
    
    public void pop() {
        stack.removeLast();
        setMin();
    }
    
    public int top() {
        return stack.peekLast();
    }
    
    public int getMin() {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */