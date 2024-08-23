import { ChatComponent } from 'features/chat/Chat';
import { TaskList } from 'features/tasks/TaskList';
import { Layout } from 'layouts/Layout';
import styles from './index.module.css';

const Home = () => {
  return (
    <Layout
      render={(user) => (
        <div className={styles.container}>
          <div className={styles.title}>Hello {user.signInName}!</div>
          <ChatComponent />
          <TaskList />
        </div>
      )}
    />
  );
};

export default Home;
