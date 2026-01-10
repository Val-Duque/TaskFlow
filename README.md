# TaskFlow 📝

## Description
TaskFlow is a mini web application designed to **manage tasks for small teams**.

It allows you to create, classify, and manage tasks in a simple, dynamic, and visual way.

The system allows you to categorize tasks by **priority** (High, Medium, Low) and manage their **status** (Pending, In Progress, Completed), providing a complete experience for organizing daily work.

> ⚠️ This application is **for web page use only**.

---

## Target Audience
Anyone who needs to organize and prioritize tasks simply and efficiently.

---

## Team Members

| Name | Role |

|--------|-----|

| Valentina Duque | Leader |

| Danna Michelle | UI/UX Manager |

Veronica Martires | UI/UX Manager |

Cesar Rios | Logic and Status Manager |

Miguel Calle | Logic and State Manager |

---

## Technologies Used
- HTML
- CSS
- Vanilla JavaScript
- Bootstrap

---

## System Scope
The application allows the following functionalities:

| Functionality | Description |

---------------|------------|

📝 Create Tasks | Add new tasks with title, description, and priority |

🔄 Change Status | Mark tasks as pending, in progress, or completed |

🗑️ Delete Tasks | Delete tasks without reloading the page |

⚡ Filters | Filter by status or priority |

✅ Validations | Prevent empty tasks and display success or error messages |

---

### Functionality Details

1️⃣ **Create Tasks**
- Each task has: Title, Description, Priority (High / Medium / Low)
- Events: `submit`, `input`, `click`

2️⃣ **Display Tasks Dynamically**
- Tasks are created and displayed dynamically using JavaScript. - Methods: `createElement`, `appendChild`, `innerHTML`

3️⃣ **Change Task Status**
- States: Pending, In Progress, Completed
- Display: buttons, checkboxes, or select elements

4️⃣ **Delete Tasks**
- Remove tasks from the DOM and state using JavaScript
- Without reloading the page

5️⃣ **Filters**
- Filter completed, pending, or priority tasks
- Use of `filter` and conditional rendering

6️⃣ **Interface Validations**
- Prevents the creation of empty tasks
- Displays error and success messages

---

## Working Method
- **One repository per team**
- **Git is mandatory**

### Suggested Roles
- Technical Lead
- Responsible for logic and state
- UI/UX Lead
- Testing and Documentation Lead

---

## Project Context
TaskFlow is a web prototype for a **fictional startup** that aims to help small teams organize and prioritize their tasks efficiently.

> “TaskFlow was born in an imaginary café where a group of friends were trying to organize their tasks without losing their minds. They decided to create this web app so they would never forget anything and could prioritize what's important.”

---

## How to Use
1. Open the webpage in your browser.

2. Fill out the form to create tasks.

3. Use the buttons or filters to manage tasks.

4. Change the status of tasks according to their progress.

5. Filter tasks by priority or status.

---

## 🚀 Future Roadmap
- [ ] Implement drag and drop to reorder tasks
- [ ] Save tasks to `localStorage` to retain them on reload
- [ ] Add custom categories or tags
- [ ] Improve accessibility for users with disabilities

---

## 💡 Usage Tips
- Use priority colors to visually organize your tasks
- Mark completed tasks to see only what's pending
- Filter by priority to focus on what's most important

---

## 👏 Credits
- Valentina Duque (Leader)
- Danna Michelle (UI/UX)
- Veronica Martires (UI/UX)
- Cesar Rios (Logic and State)
- Miguel Calle (Logic and State)

Resources used:
- [Bootstrap](https://getbootstrap.com/)
- [Font] Font Awesome (https://fontawesome.com/) for icons

---

## License
This project is for **educational and demonstration** use only, and is free to modify and learn from.
