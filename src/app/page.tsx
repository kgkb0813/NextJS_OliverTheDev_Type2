import styles from "./page.module.css"
import Title from "@/components/title/Title";
import AddTodo from "@/components/todo/AddTodo";
import Todo from "@/components/todo/Todo";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  return data;
}

export default async  function Home() {
  const data = await getData();

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Title}>
          <Title />
        </div>
        <div className={styles.DoWrapper}>
          <div className={styles.AddTodo}>
            <AddTodo />
          </div>
          <div className={styles.TodoWrapper}>
            {
              data.map((todo, index) => (
                <div key={index}>
                  <Todo todo={todo}/>
                </div> 
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
