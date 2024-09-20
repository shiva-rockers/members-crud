const members = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        age: 30,
        occupation: "Software Developer",
        city: "New York",
        country: "USA",
        isActive: true,
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        age: 28,
        occupation: "Data Scientist",
        city: "San Francisco",
        country: "USA",
        isActive: true,
    },
    {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice@example.com",
        age: 35,
        occupation: "Product Manager",
        city: "London",
        country: "UK",
        isActive: false,
    },
    {
        id: 4,
        firstName: "Bob",
        lastName: "Brown",
        email: "bob@example.com",
        age: 42,
        occupation: "Marketing Specialist",
        city: "Sydney",
        country: "Australia",
        isActive: true,
    },
    {
        id: 5,
        firstName: "Emma",
        lastName: "Wilson",
        email: "emma@example.com",
        age: 26,
        occupation: "UX Designer",
        city: "Toronto",
        country: "Canada",
        isActive: true,
    },
];

const memberService = {
    getAllMembers: (filter) => {
        if(filter.isActive) return members.filter(m => m.isActive === filter.isActive);
        return members;
    },
    deleteOneMember: (id) => {
        return members.filter(m => m.id !== id);
    },
};

module.exports = memberService;
