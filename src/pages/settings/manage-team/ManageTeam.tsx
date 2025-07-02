import React, { useState } from 'react';
import TeamCarousel from './TeamCarousel';
import { Button } from 'antd';

import { LiaEditSolid } from 'react-icons/lia';
import { BsDownload, BsPlus } from 'react-icons/bs';
import Model from '../../../components/shared/Modal';
import TeamMemberForm from './TeamMemberForm';

const ManageTeam: React.FC = () => {
      const [open, setOpen] = useState(false);
      const [edit, setEdit] = useState(false);
      return (
            <>
                  <div className="relative bg-[#f4f4f4]  rounded-2xl w-full border min-h-96 mx-auto ">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white w-[900px] h-[82px] rounded-b-2xl">
                              <TeamCarousel />
                        </div>
                        <div className="flex absolute top-5 right-5 gap-2 items-center">
                              <Button size="large" shape="circle" icon={<BsDownload size={24} color="#606060" />} />
                              <Button
                                    onClick={() => {
                                          setEdit(false);
                                          setOpen(true);
                                    }}
                                    size="large"
                                    shape="circle"
                                    icon={<BsPlus size={24} color="#606060" />}
                              />
                        </div>
                        <div className="flex absolute top-5 left-5 gap-2 items-center">
                              <img src="/icons/money.png" alt="" />
                              <p>Limit Recovery Team</p>
                              <img src="/icons/money.png" alt="" />
                        </div>

                        <div className="grid grid-cols-3 gap-4 mx-10 my-28">
                              <div>
                                    <div className="flex gap-2 justify-center items-center mb-3">
                                          <img src="/icons/writing-hand.png" alt="" />
                                          <h1>Intake</h1>
                                    </div>
                                    <div className="p-5 space-y-3 bg-white rounded-xl">
                                          {[...Array(5)].map((_, _index) => (
                                                <div className="flex justify-between border-b">
                                                      <div>
                                                            <div className="flex gap-2 items-center">
                                                                  <img src="/user.svg" alt="" />
                                                                  <h1 className="text-[#5c5b5b]">Angel Mathew</h1>
                                                            </div>
                                                            <div className="my-2">
                                                                  <p>Allocate Case to User</p>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <Button
                                                                  onClick={() => {
                                                                        setEdit(true);
                                                                        setOpen(true);
                                                                  }}
                                                                  type="text"
                                                                  icon={<LiaEditSolid size={20} color="#007AFF" />}
                                                            />
                                                      </div>
                                                </div>
                                          ))}
                                          <div className="space-y-2">
                                                <Button
                                                      onClick={() => {
                                                            setEdit(false);
                                                            setOpen(true);
                                                      }}
                                                      shape="circle"
                                                      icon={<BsPlus size={20} color="#606060" />}
                                                />
                                                <p>Identify Technical Issues</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <div className="flex gap-2 justify-center items-center mb-3">
                                          <img src="/icons/balance.png" alt="" />
                                          <h1>Attorneys</h1>
                                    </div>
                                    <div className="p-5 space-y-3 bg-white rounded-xl">
                                          {[...Array(5)].map((_, _index) => (
                                                <div className="flex justify-between border-b">
                                                      <div>
                                                            <div className="flex gap-2 items-center">
                                                                  <img src="/user.svg" alt="" />
                                                                  <h1 className="text-[#414141]">Angel Mathew</h1>
                                                            </div>
                                                            <div className="my-2">
                                                                  <p>Allocate Case to User</p>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <Button
                                                                  onClick={() => {
                                                                        setEdit(true);
                                                                        setOpen(true);
                                                                  }}
                                                                  type="text"
                                                                  icon={<LiaEditSolid size={20} color="#007AFF" />}
                                                            />
                                                      </div>
                                                </div>
                                          ))}
                                          <div className="space-y-2">
                                                <Button
                                                      onClick={() => {
                                                            setEdit(false);
                                                            setOpen(true);
                                                      }}
                                                      shape="circle"
                                                      icon={<BsPlus size={20} color="#606060" />}
                                                />
                                                <p>Identify Technical Issues</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <div className="flex gap-2 justify-center items-center mb-3">
                                          <img src="/icons/brain.png" alt="" />
                                          <h1>Innovation Zone</h1>
                                    </div>
                                    <div className="p-5 space-y-3 bg-white rounded-xl">
                                          {[...Array(5)].map((_, _index) => (
                                                <div className="flex justify-between border-b">
                                                      <div>
                                                            <div className="flex gap-2 items-center">
                                                                  <img src="/user.svg" alt="" />
                                                                  <h1 className="text-[#414141]">Angel Mathew</h1>
                                                            </div>
                                                            <div className="my-2">
                                                                  <p>Allocate Case to User</p>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <Button
                                                                  onClick={() => {
                                                                        setEdit(true);
                                                                        setOpen(true);
                                                                  }}
                                                                  type="text"
                                                                  icon={<LiaEditSolid size={20} color="#007AFF" />}
                                                            />
                                                      </div>
                                                </div>
                                          ))}
                                          <div className="space-y-2">
                                                <Button
                                                      onClick={() => {
                                                            setEdit(false);
                                                            setOpen(true);
                                                      }}
                                                      shape="circle"
                                                      icon={<BsPlus size={20} color="#606060" />}
                                                />
                                                <p>Identify Technical Issues</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <Model
                        width={800}
                        title={edit ? 'Edit Team Member' : 'Add Team Member'}
                        open={open}
                        setOpen={setOpen}
                        body={<TeamMemberForm />}
                  />
            </>
      );
};

export default ManageTeam;
