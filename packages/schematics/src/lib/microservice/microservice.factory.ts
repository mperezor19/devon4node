import { Tree, Rule, apply, url, template, MergeStrategy } from '@angular-devkit/schematics';
import { mergeWith } from 'lodash';
import { strings } from '@angular-devkit/core';

interface IMicroserviceOptions {
    name: string;
}

export function microservice(options: IMicroserviceOptions) {

    return (host: Tree): Rule => {

        const templateSource = apply(url('./files'), [
            template({ ...options, ...strings }),
        ]);

        const merged = mergeWith(templateSource, MergeStrategy.Overwrite)

        return merged(host) as Rule;
    }
}