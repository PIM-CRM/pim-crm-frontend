import React, { useState } from 'react';
import { Avatar, Button, Upload, Input, message } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile } from 'antd/es/upload/interface';
import { AiOutlineEdit } from 'react-icons/ai';

interface Profile {
    name: string;
    role: string;
    profilePicture: string | null;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    profileQuote: string;
}

const MyDetails: React.FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [profile, setProfile] = useState<Profile>({
        name: 'Carli K. Bryant',
        role: 'Attorney',
        profilePicture: null,
        firstName: 'Carli',
        middleName: 'K.',
        lastName: 'Bryant',
        email: 'carli.bryant@testemail.com',
        phone: '(210) 305-9076',
        profileQuote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    });

    const handleProfilePictureChange = (info: UploadChangeParam) => {
        const file = info.file as RcFile | undefined;

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfile({ ...profile, profilePicture: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const saveChanges = () => {
        setIsEditing(false);
        message.success('Profile updated successfully!');
        console.log('Updated Profile:', profile);
    };

    return (
        <div className="">
            <section className="flex items-center gap-4 p-5 border rounded-xl">
                <div className="relative">
                    <Upload showUploadList={false} beforeUpload={() => false} onChange={handleProfilePictureChange}>
                        <Avatar size={100} src={profile.profilePicture || '/user.svg'} className="cursor-pointer" />
                    </Upload>
                </div>

                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <div>
                            {isEditing ? (
                                <>
                                    <Input
                                        name="name"
                                        value={profile.name}
                                        onChange={handleInputChange}
                                        className="mb-2"
                                    />
                                    <Input name="role" value={profile.role} onChange={handleInputChange} />
                                </>
                            ) : (
                                <>
                                    <div className="text-lg font-semibold">{profile.name}</div>
                                    <div className="text-sm text-gray-500">{profile.role}</div>
                                </>
                            )}
                        </div>

                        {!isEditing && (
                            <Button
                                shape="circle"
                                icon={<AiOutlineEdit size={20} color="#007AFF" />}
                                onClick={() => setIsEditing(true)}
                            />
                        )}
                    </div>
                </div>
            </section>

            <section className="my-4 p-5 border rounded-xl">
                <h1 className="text-lg font-semibold mb-4">Personal Information</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">First Name</p>
                        {isEditing ? (
                            <Input
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleInputChange}
                                className="text-black"
                            />
                        ) : (
                            <p className="text-black">{profile.firstName}</p>
                        )}
                    </div>

                    <div>
                        <p className="font-semibold">Middle Name</p>
                        {isEditing ? (
                            <Input
                                name="middleName"
                                value={profile.middleName}
                                onChange={handleInputChange}
                                className="text-black"
                            />
                        ) : (
                            <p className="text-black">{profile.middleName}</p>
                        )}
                    </div>

                    <div>
                        <p className="font-semibold">Last Name</p>
                        {isEditing ? (
                            <Input
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleInputChange}
                                className="text-black"
                            />
                        ) : (
                            <p className="text-black">{profile.lastName}</p>
                        )}
                    </div>

                    <div>
                        <p className="font-semibold">Email Address</p>
                        {isEditing ? (
                            <Input
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                                className="text-black"
                            />
                        ) : (
                            <p className="text-black">{profile.email}</p>
                        )}
                    </div>

                    <div>
                        <p className="font-semibold">Phone</p>
                        {isEditing ? (
                            <Input
                                name="phone"
                                value={profile.phone}
                                onChange={handleInputChange}
                                className="text-black"
                            />
                        ) : (
                            <p className="text-black">{profile.phone}</p>
                        )}
                    </div>
                    <div>
                        <p className="font-semibold">Profile Quote</p>
                        {isEditing ? (
                            <Input
                                name="profileQuote"
                                value={profile.profileQuote}
                                onChange={handleInputChange}
                                className="text-black"
                            />
                        ) : (
                            <p className="text-black">{profile.profileQuote}</p>
                        )}
                    </div>
                </div>

                {isEditing && (
                    <div className="flex justify-end mt-4">
                        <Button type="primary" onClick={saveChanges}>
                            Save
                        </Button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default MyDetails;
