import { colors } from '../shared/config/customStyles';

const TaskData = [
    {
        id: 1,
        title: "Office Work",
        description: "Have to clean office",
        image: require("../../assets/task.jpg"),
    },
    {
        id: 2,
        title: "Garden Work",
        description: "Have to dirt bed",
        image: require("../../assets/task.jpg"),
    },
    {
        id: 3,
        title: "Car Repair",
        description: "I need to change the oil",
        image: require("../../assets/task.jpg"),
    },
    {
        id: 4,
        title: "Homework",
        description: "Need to turn in assignments",
        image: require("../../assets/task.jpg"),
    },
];

export const taskCategories = [
    {
        key: "1",
        title: "School Work",
        label: 'School Work',
        icon: {
            name: "book-open",
            backgroundColor: colors.secondary,
        },
    },
    {
        key: "2",
        title: "Office Work",
        label: 'Office Work',
        icon: {
            name: "desk-lamp",
            backgroundColor: colors.secondary,
        },
    },
    {
        key: "3",
        title: "Chores",
        label: 'Chores',
        icon: {
            name: "account-cowboy-hat",
            backgroundColor: colors.secondary,
        },
    },
    {
        key: "4",
        title: "Notes",
        label: 'Notes',
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.secondary,
        },
    },
];

export const categoryItems = {
    'School Work': [],
    'Office Work': [],
    'Chores': [],
    'Notes': []
}

export default TaskData;
