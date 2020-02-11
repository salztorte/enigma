export default class PlugBoard {
    private connection = [...Array(26)].map((_, i) => i);

    public constructor() {
        this.connection[0] = 25;
        this.connection[25] = 0;
    }

    public forward(key: number): number {
        return this.connection[key];
    }

    public reverse(key: number): number {
        return this.reverseConnection[key];
    }

    private get reverseConnection(): number[] {
        const reverseConnection = [...Array(26)];

        this.connection.forEach(
            (val, index) => (reverseConnection[val] = index)
        );

        return reverseConnection;
    }
}
