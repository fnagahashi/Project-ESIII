enum RoomType {
    single = "single",
    double = "double",
    suite = "suite",
}

interface IRoomRequest {
    id?: string;
    roomCode: string;
    isActive: boolean;
    type: RoomType;
}

export { IRoomRequest }