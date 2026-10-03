export {};

class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null = null;

    add(data: T): void {
        const newNode = new ListNode<T>(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    display(): void {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const numberList = new LinkedList<number>();

numberList.add(10);
numberList.add(20);
numberList.add(30);

console.log("Linked List:");

numberList.display();
