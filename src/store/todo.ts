import { defineStore } from "pinia";

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => ({
        commonState: {
            modalOpen: false
        },
        todosList: [{
            id: 1,
            title: "Design new ui presentation",
            subTitle: "Dribbble marketing",
            progress: 60,
            deadline: "2024-05-01",
            status: 'todo'
        },
        {
            id: 21,
            title: "ODZHGLNDGL",
            subTitle: "Dribbble marketing",
            progress: 60,
            deadline: "2024-04-30",
            status: 'todo'
        },
            // {
            //     id: 31,
            //     title: "sssssssssssss",
            //     subTitle: "Dribbble marketing",
            //     progress: 60,
            //     deadline: "24 Aug 2024",
            //     status: 'todo'
            // },
        ],
        inProgressList: [{
            id: 2,
            title: "Design new ui presentation",
            subTitle: "Dribbble marketing",
            progress: 60,
            deadline: "24 Aug 2024",
            status: 'inProgress'
        }
        ],
        completedList: [{
            id: 3,
            title: "Design new ui presentation",
            subTitle: "Dribbble marketing",
            progress: 60,
            deadline: "24 Aug 2024",
            status: 'done'
        }],
    }),

    getters: {
        // getTodos: (state) => state.todosList,
    },
    actions: {
        addTodo(data: any) {
            this.commonState.modalOpen = false;
            if (data.status === 'inProgress') this.inProgressList.push(data)
            else if (data.status === 'done') this.completedList.push(data)
            else this.todosList.push(data)
        },

        removeTodo(id: number) {
            const index = this.todosList.findIndex(todo => todo.id === id);
            if (index !== -1) {
                this.todosList.splice(index, 1)[0];
                return;
            }

            const indexInProgess = this.inProgressList.findIndex(todo => todo.id === id);
            if (indexInProgess !== -1) {
                this.inProgressList.splice(indexInProgess, 1)[0];
                return;
            }

            const indexCompleted = this.completedList.findIndex(todo => todo.id === id);
            if (indexCompleted !== -1) {
                this.completedList.splice(indexCompleted, 1)[0];
                return;
            }
        },

        changeProgress(id: number, change: string) {
            const todoData = this.todosList.find(todo => todo.id === id);
            if (todoData) {
                if (change === 'add' && todoData.progress !== 100) todoData.progress += 10;
                if (change === 'deduct' && todoData.progress !== 0) todoData.progress -= 10;
            }

            const inProgressData = this.inProgressList.find(todo => todo.id === id);
            if (inProgressData) {
                if (change === 'add' && inProgressData.progress !== 100) inProgressData.progress += 10;
                if (change === 'deduct' && inProgressData.progress !== 0) inProgressData.progress -= 10;
            }

            const completeData = this.completedList.find(todo => todo.id === id);
            if (completeData) {
                if (change === 'add' && completeData.progress !== 100) completeData.progress += 10;
                if (change === 'deduct' && completeData.progress !== 0) completeData.progress -= 10;
            }
        },

        moveToInProgress(id: number) {
            const todoIndex = this.todosList.findIndex((todo) => todo.id === id);

            if (todoIndex !== -1) {
                const todoData = this.todosList.splice(todoIndex, 1)[0];

                this.inProgressList.push({
                    ...todoData,
                    status: 'inProgress'
                });
            }
        },

        moveToComplete(id: number) {
            const inProgressIndex = this.inProgressList.findIndex((todo) => todo.id === id);

            if (inProgressIndex !== -1) {
                const inProgressData = this.inProgressList.splice(inProgressIndex, 1)[0];

                this.completedList.push({
                    ...inProgressData,
                    status: 'done'
                });
            }
        },

        changeStatusToInprogress(id: number) {
            const inProgressData = this.inProgressList.find((todo) => todo.id === id);
            if (inProgressData) inProgressData.status = "inProgress";
            console.log("YES", id);

        },

        changeStatusToTodo(id: number) {
            const todoData = this.todosList.find((todo) => todo.id === id);
            if (todoData) {
                todoData.status = "todo"
                todoData.progress = 0
            }
        },

        changeStatusToComplete(id: number) {
            const completedData = this.completedList.find((todo) => todo.id === id);
            if (completedData) {
                completedData.status = "done"
                // completedData.progress = 100
            }

        },


        openModal(isOpen: boolean) {
            this.commonState.modalOpen = isOpen;
        }
    }
})