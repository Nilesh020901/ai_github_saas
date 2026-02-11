'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from '@/trpc/react'

type FormInput = {
    repoUrl: String
    projectName: String
    githubToken: String
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>()

    const createProject = api
    function onSubmit(data: FormInput) {
        window.alert(JSON.stringify(data, null, 2))
        return true
    }
  return (
    <div className='flex items-center gap-12 h-full justify-center'>
        <img src='/undraw_developer.svg' className='h-56 w-auto' />
        <div>
            <div>
                <h1 className='font-semibold text-2xl'>
                    Link your Github Repository
                </h1>
                <p className='text-sm text-muted-foreground'>
                    Enter the URL of your repository to link it to Dionysus
                </p>
            </div>
            <div className='h-4'>
                <div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            {...register('projectName', {required: true})}
                            placeholder='Project Name'
                            required 
                        />
                        <div className='h-2'></div>
                        <Input 
                            {...register('repoUrl', {required: true})}
                            placeholder='Github URL'
                            type='url'
                            required 
                        />
                        <div className='h-2'></div>
                        <Input 
                            {...register('githubToken')}
                            placeholder='Github Token (optional)' 
                        />
                        <div className='h-4'></div>
                        <Button type='submit'>
                            Create Project
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePage