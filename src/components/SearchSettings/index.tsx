interface SearchSettingsProps {
    searchSettingsOpen: boolean;
}

const SearchSettings: React.FC<SearchSettingsProps> = ({searchSettingsOpen}) => {
    return (
        <div
            className={`${searchSettingsOpen ? "block" : "hidden"} absolute bg-white w-[500px] top-[50px] -left-0.5 rounded shadow-2xl`}>
            <form>
                <div className="flex flex-col gap-5 p-3 text-[#5F6368] text-sm font-medium">
                    <label className="flex">
                        <span className="flex-1">From</span>
                        <input className="flex-3 outline-none border-b border-b-gray-200 focus:border-b-blue-600"
                               type="text"/>
                    </label>
                    <label className="flex">
                        <span className="flex-1">To</span>
                        <input className="flex-3 outline-none border-b border-b-gray-200 focus:border-b-blue-600"
                               type="text"/>
                    </label>
                    <label className="flex">
                        <span className="flex-1">Subject</span>
                        <input className="flex-3 outline-none border-b border-b-gray-200 focus:border-b-blue-600"
                               type="text"/>
                    </label>
                    <label className="flex">
                        <span className="flex-1">Has the words</span>
                        <input className="flex-3 outline-none border-b border-b-gray-200 focus:border-b-blue-600"
                               type="text"/>
                    </label>
                    <label className="flex">
                        <span className="flex-1">Doesn't have</span>
                        <input className="flex-3 outline-none border-b border-b-gray-200 focus:border-b-blue-600"
                               type="text"/>
                    </label>
                    <label className="flex">
                        <span className="flex-1">Size</span>
                        <div className="flex-3 gap-1 flex">
                            <select className="bg-transparent px-2 border-b border-b-gray-200 focus:border-b-blue-600">
                                <option value="greater-than">greater than</option>
                                <option value="greater-than">smaller than</option>
                            </select>
                            <input type="text"
                                   className="outline-none border-b flex-auto border-b-gray-200 focus:border-b-blue-600"/>
                            <select className="bg-transparent px-2 border-b border-b-gray-200 focus:border-b-blue-600">
                                <option value="mb">MB</option>
                                <option value="kb">KB</option>
                                <option value="bayt">Bayt</option>
                            </select>
                        </div>
                    </label>
                    <label className="flex">
                        <span className="flex-1">Tarih Aralığı</span>
                        <div className="flex-3 gap-1 flex">
                            <select
                                className="bg-transparent flex px-2 border-b border-b-gray-200 flex-1 focus:border-b-blue-600">
                                <option value="1gün">1 gün</option>
                                <option value="3gün">3 gün</option>
                                <option value="1hafta">1 hafta</option>
                                <option value="3hafta">3 hafta</option>
                                <option value="1ay">1 ay</option>
                                <option value="greater-than">smaller than</option>
                            </select>
                            <input className="flex-1 outline-none border-b border-b-gray-200 focus:border-b-blue-600"
                                   type="date"/>
                        </div>
                    </label>
                    <label className="flex">
                        <span className="flex-1">Ara</span>
                        <select
                            className="bg-transparent flex px-2 border-b border-b-gray-200 flex-3 focus:border-b-blue-600">
                            <option value="tüm-postalar">Tüm Postalar</option>
                            <option value="gelen-kutusu">Gelen Kutusu</option>
                            <option value="yildizli">Yıldızlı</option>
                            <option value="gonderilmis-postalar">Gönderilmiş Postalar</option>
                        </select>
                    </label>
                    <label className="flex gap-5 items-center">
                        <input className="w-4 h-4 focus:border-b-blue-600" type="checkbox"/>
                        <span>Has attachment</span>
                    </label>
                    <div className="flex items-center justify-end gap-5">
                        <button className="rounded bg-white text-gray-200 py-3 px-5">Create Filter</button>
                        <button className="bg-[#1a73e8] rounded text-gray-200 py-3 px-5">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchSettings;
