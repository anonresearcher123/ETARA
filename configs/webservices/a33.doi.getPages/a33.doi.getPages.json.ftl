{
    "feed": {
        "entry": {
            "pages": <#if subject.findValue("pageNumbers")??>"${subject.findValue("pageNumbers")?json_string}"<#else>""</#if>
        }
    }
}
