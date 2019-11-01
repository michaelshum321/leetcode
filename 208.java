// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/

class Trie {
    class Node{
        boolean isWord = false;
        char val;
        Node[] child = new Node[26];
        Node() {}
        Node(char c) {
            this.val = c;
        }
    }
    private static final int A = 97; // lowercase a in ascii decimal val
    Node root;
    /** Initialize your data structure here. */
    public Trie() {
        root = new Node();
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        Node it = this.root;
        for(int i = 0 ; i < word.length(); i++){
            int lower = (int)Character.toLowerCase(word.charAt(i));
            if (it.child[lower - A] == null) {
                it.child[lower-A] = new Node((char)lower);
            }
            it = it.child[lower-A];
        }
        it.isWord = true;
    }
    
    private Node findNode(String word) {
        Node it = this.root;
        for(int i = 0; i < word.length(); i++) {
            int lower = (int) Character.toLowerCase(word.charAt(i));
            if (it.child[lower-A] == null) {
                return null;
            }
            it = it.child[lower-A];
        }
        return it;
    }
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        Node node = findNode(word);
        return node == null ? false : node.isWord;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        Node node = findNode(prefix);
        return node != null;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */