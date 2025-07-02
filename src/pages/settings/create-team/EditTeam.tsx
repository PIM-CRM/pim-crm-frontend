import { Avatar, Button, Input, message, Upload } from 'antd';
import { RcFile, UploadChangeParam } from 'antd/es/upload';
import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';

type TProfile = {
      name: string;
      role: string;
      profilePicture: string | null;
      firstName: string;
      middleName: string;
      lastName: string;
      email: string;
      phone: string;
};
const EditTeam = () => {
      const [isEditing, setIsEditing] = useState<boolean>(false);
      const [profile, setProfile] = useState<TProfile>({
            name: 'Carli K. Bryant',
            role: 'Attorney',
            profilePicture: null,
            firstName: 'Carli',
            middleName: 'K.',
            lastName: 'Bryant',
            email: 'carli.bryant@testemail.com',
            phone: '(210) 305-9076',
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
            <div>
                  <div className="flex justify-end my-4">
                        <Button
                              style={{
                                    height: 42,
                              }}
                              type="text"
                              icon={
                                    <BiPlus
                                          color="#fff"
                                          className="bg-[#0089FC] rounded-full text-white p-1 text-4xl"
                                    />
                              }
                        >
                              Add Team
                        </Button>
                  </div>
                  <section className="flex items-center gap-4 p-5 border rounded-xl">
                        <div className="relative">
                              <Upload
                                    showUploadList={false}
                                    beforeUpload={() => false}
                                    onChange={handleProfilePictureChange}
                              >
                                    <Avatar
                                          size={100}
                                          src={profile.profilePicture || '/user.svg'}
                                          className="cursor-pointer"
                                    />
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
                                                      <Input
                                                            name="role"
                                                            value={profile.role}
                                                            onChange={handleInputChange}
                                                      />
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

export default EditTeam;
