'use client'
import { useAuth } from '@clerk/nextjs'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { DeleteResumeById, GetAllResumesByUserId } from './builder/actions'
import { Skeleton } from '@/components/ui/skeleton'
import { Resume } from '@/lib/validations'
import { ProgressBarLink } from '@/providers/progress-bar-provider'
import { Button } from '@/components/ui/button'
import { Eye, Pen, Trash } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'

function ResumeList() {
    const { userId } = useAuth()
    const [loading, setLoading] = React.useState(false);
    const [resumes, setResumes] = React.useState<Resume[]>([]);
    const [refresh, setRefresh] = React.useState<number>(0);
    useEffect(() => {
        if (!userId || userId === '' || userId === null) return
        setLoading(true);
        const response = GetAllResumesByUserId({ userId: userId }).then((res) => {
            if (res.success) {
                setResumes(res.data || []);
            }
            console.log("Fetched resumes:", res.data);
        }).finally(() => {
            setLoading(false);
        })
    }, [userId, refresh]);

    if (!userId || userId === '' || userId === null) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Please log in to view your resumes.</p>
            </div>
        )
    } else {
        if (loading) {
            return <Skeleton className='h-96 w-full' />
        }
        return (
            <div className="flex flex-wrap gap-2">
                {resumes.map((e) => {
                    return (
                        <div key={e.id} className="h-54 w-40 bg-muted flex flex-col rounded-md overflow-hidden relative">
                            <div className='grow p-2'>
                                <h1 className='text-center'>{e.title}</h1>
                            </div>
                            <div className='flex justify-end gap-2 absolute bottom-2 right-2'>
                                <ProgressBarLink href={'/builder?resumeId=' + e.id} className='cursor-pointer'>
                                    <Button variant={'outline'} size={'icon'} className='cursor-pointer'><Pen /></Button>
                                </ProgressBarLink>
                                <Button variant={"outline"} className='cursor-pointer' size={'icon'}><Eye /></Button>
                                <AlertBox id={e.id || ''} setRefresh={setRefresh} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ResumeList



const AlertBox = ({ id, setRefresh }: { id: string, setRefresh: Dispatch<SetStateAction<number>> }) => {
    const handleDelete = async () => {
        const response = await DeleteResumeById({ resumeId: id });
        if (response.success == true) {
            setRefresh(number => number + 1)
        } else {
            console.error("Failed to delete resume:", response.message);
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" size="icon">
                    <Trash />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your resume.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button variant="outline">Cancel</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
