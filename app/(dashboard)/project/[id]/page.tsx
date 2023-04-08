import { TaskCard } from '@/components/TaskCard';
import { getUserFromCookie } from '@/lib/auth';
import { db } from '@/lib/db';
import { Project, Task } from '@prisma/client';
import { cookies } from 'next/headers';

const getData = async (
  id: string
): Promise<
  | (Project & {
      tasks: Task[];
    })
  | null
> => {
  const user = await getUserFromCookie(cookies());

  const project = await db.project.findFirst({
    where: {
      id,
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return project;
};

export default async function ProjectPage({ params }: any) {
  const project = await getData(params.id);

  return (
    <div className='h-full overflow-y-auto pr-6 w-1/1'>
      {/* @ts-expect-error Server Component */}
      <TaskCard tasks={project?.tasks} title={project?.name} />
    </div>
  );
}
