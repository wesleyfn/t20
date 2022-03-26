class Test {
    public static void main(String[] args) {
        int i = 0;
        int x = 1;
        int y = (x++) + i++;
        System.out.println(y);
    }
}