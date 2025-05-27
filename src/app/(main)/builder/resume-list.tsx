'use client'
import { useAuth } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { DeleteResumeById, GetAllResumesByUserId } from './actions'
import { Skeleton } from '@/components/ui/skeleton'
import { Resume } from '@/lib/validations'
import { ProgressBarLink } from '@/providers/progress-bar-provider'
import { Button } from '@/components/ui/button'
import { Eye, Pen, Trash } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import Loading from '@/components/loader'

function ResumeList() {
    const { userId } = useAuth()
    const [loading, setLoading] = React.useState(false);
    const [resumes, setResumes] = React.useState<Resume[]>([]);

    const handleRemoveOnDelete = (id: string) => {
        setResumes((prev) => prev.filter((resume) => resume.id !== id));
    }

    useEffect(() => {
        if (!userId || userId === '' || userId === null) return
        setLoading(true);
        GetAllResumesByUserId({ userId: userId }).then((res) => {
            if (res.success) {
                setResumes(res.data || []);
            }
        }).finally(() => {
            setLoading(false);
        })
    }, [userId]);

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
                                <h1 className='text-center text-sm font-semibold'>{e.title}</h1>
                            </div>
                            <div className='flex justify-end gap-2 absolute bottom-2 right-2'>
                                <ProgressBarLink href={'/builder?resumeId=' + e.id} className='cursor-pointer'>
                                    <Button variant={'outline'} size={'icon'} className='cursor-pointer'><Pen /></Button>
                                </ProgressBarLink>
                                <Button variant={"outline"} className='cursor-pointer' size={'icon'}><Eye /></Button>
                                <AlertBox handleRemoveOnDelete={handleRemoveOnDelete} id={e.id || ''} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ResumeList



const AlertBox = ({ id, handleRemoveOnDelete }: { id: string, handleRemoveOnDelete: (id: string) => void }) => {
    const [loading, setLoading] = useState(false)
    const handleDelete = async () => {
        setLoading(true);
        await DeleteResumeById({ resumeId: id });
        handleRemoveOnDelete(id);
        setLoading(true);
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className='bg-red-600 hover:bg-red-500' disabled={loading} size="icon">
                    {loading ? <Loading /> : <Trash />}
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
                        <Button variant="outline" autoFocus>Cancel</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button className='bg-red-600 hover:bg-red-500' onClick={handleDelete}>Delete</Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
